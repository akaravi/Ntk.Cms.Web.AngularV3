import {
  Component,
  ViewChild,
  OnInit,
  OnDestroy,
  Input,
  Injectable,
} from '@angular/core';
import { RuleSet, QueryBuilderFieldMap, Field, Rule } from 'ngx-query-builder';
import { AccessModel, EnumClauseType, FilterDataModel } from 'ntk-cms-api';
import { ComponentOptionSearchContentModel } from '../../models/base/componentOptionSearchContentModel';


@Component({
  selector: 'app-cms-search-content-list',
  templateUrl: './cmsSearchContentList.component.html',
  styleUrls: ['./cmsSearchContentList.component.scss'],
})
export class CmsSearchContentListComponent implements OnInit {
  optionsData: ComponentOptionSearchContentModel = new ComponentOptionSearchContentModel();

  Filters: Array<FilterDataModel>;
  @Input()
  set options(model: ComponentOptionSearchContentModel) {
    this.optionsData = model;
    if (this.optionsData.data.hidden == null) {
      this.optionsData.data.hidden = true;
    }

    model.methods = {
      setAccess: (x) => this.setAccess(x)
    };
  }
  get options(): ComponentOptionSearchContentModel {
    if (this.optionsData.data.hidden) {

    }
    return this.optionsData;
  }
  model: any;
  query: RuleSet;
  // {
  // condition: 'and',
  // rules: [
  //   {
  //     field: 'category',
  //     type: 'select',
  //     operator: 'equal',
  //     value: ['wallets']
  //   },
  //   {
  //     field: 'price',
  //     type: 'double',
  //     operator: 'greater',
  //     value: 45.5
  //   },
  //   {
  //     field: 'inStock',
  //     type: 'boolean',
  //     operator: 'equal',
  //     value: true
  //   },
  //   {
  //     field: 'createdOn',
  //     type: 'date',
  //     operator: 'equal',
  //     value: '2020-01-20'
  //   }
  //   ]
  // };

  fieldMap: QueryBuilderFieldMap = {};

  constructor() { }

  ngOnInit(): void { }
  setAccess(model: AccessModel): void {
    this.optionsData.data.Access = model;
    this.setFields();
  }
  setFields(): void {
    if (
      this.optionsData &&
      this.optionsData.data.Access &&
      this.optionsData.data.Access.FieldsInfo
    ) {
      this.optionsData.data.Access.FieldsInfo.forEach((column, index) => {
        if (!column.AccessSearchField) { return; }
        if (
          column.FieldType === 'System.Int32' ||
          column.FieldType === 'System.Int64'
        ) {
          this.fieldMap[column.FieldName] = {
            name: column.FieldTitle,
            type: 'integer',
          };
        } else if (column.FieldType === 'System.String') {
          this.fieldMap[column.FieldName] = {
            name: column.FieldTitle,
            type: 'string',
          };
        } else if (column.FieldType === 'MongoDB.Bson.ObjectId') {
          this.fieldMap[column.FieldName] = {
            name: column.FieldName,
            type: 'string',
          };
        } else if (column.FieldType === 'System.Boolean') {
          this.fieldMap[column.FieldName] = {
            name: column.FieldTitle,
            type: 'select',

            options: [
              { name: 'بله', value: true },
              { name: 'خیر', value: false },
            ],
          };
        } else if (column.FieldType === 'System.DateTime') {
          this.fieldMap[column.FieldName] = {
            name: column.FieldTitle,
            type: 'date',
            settings: {},
          };
        } else if (column.FieldType === 'link') {
          this.fieldMap[column.FieldName] = {
            name: column.FieldTitle,
            type: 'string',
          };
        } else {
          // console.log("Error: Type is not defined for columns! Please add 'type' property for each columns in gridOptions.");
        }
      });
    }
  }
  getRules(): void {
    this.Filters = new Array<FilterDataModel>();
    let clauseType: EnumClauseType = EnumClauseType.And;
    if (!this.query || !this.query.condition) { return; }

    if (this.query.condition === 'or') { clauseType = EnumClauseType.Or; }
    this.query.rules.forEach((column, index) => {
      const ruleSet = column as RuleSet;
      const rule = column as Rule;
      if (
        ruleSet &&
        ruleSet.condition &&
        ruleSet.rules &&
        ruleSet.rules.length > 0
      ) {
        const Filter = new FilterDataModel();
        Filter.Filters = this.getRulesSetChild(ruleSet);
        Filter.ClauseType = clauseType;
        this.Filters.push(Filter);
      } else if (rule) {
        const Filter = this.getRulesChild(rule);
        Filter.ClauseType = clauseType;
        this.Filters.push(Filter);
      }
    });
  }
  getRulesChild(rule: Rule): FilterDataModel {
    const searchType = this.getSearchType(rule.operator);
    const Filter = new FilterDataModel();
    Filter.PropertyName = rule.field;
    Filter.Value = rule.value;
    Filter.SearchType = searchType;
    return Filter;
  }
  getRulesSetChild(ruleSetInput: RuleSet): Array<FilterDataModel> {
    const Filters = new Array<FilterDataModel>();
    let clauseType: EnumClauseType = EnumClauseType.And;
    if (ruleSetInput.condition === 'or') { clauseType = EnumClauseType.Or; }
    ruleSetInput.rules.forEach((column, index) => {
      const ruleSet = column as RuleSet;
      const rule = column as Rule;
      if (
        ruleSet &&
        ruleSet.condition &&
        ruleSet.rules &&
        ruleSet.rules.length > 0
      ) {
        const Filter = new FilterDataModel();
        Filter.Filters = this.getRulesSetChild(ruleSet);
        Filter.ClauseType = clauseType;
        Filters.push(Filter);
      } else if (rule) {
        const Filter = this.getRulesChild(rule);
        Filter.ClauseType = clauseType;
        Filters.push(Filter);
      }
    });
    return Filters;
  }

  onSubmit(): void {
    // this.model = { name: "ali" };
    this.getRules();
    this.optionsData.actions.onSubmit(this.Filters);
  }
  onGetRules(): void {
    // console.log(this.query);
  }
  onSaveRules(): void { }
  onSetRules(): void { }
  getSearchType(operator): number {
    switch (operator) {
      case 'equal':
        return 0;
      case 'not_equal':
        return 1;
      case 'less':
        return 2;
      case 'greater':
        return 3;
      case 'between':
        return 4;
      case 'contains':
        return 5;
      case 'not_contains':
        return 6;
      case 'begins_with':
        return 7;
      case 'ends_with':
        return 8;
      case 'less_or_equal':
        return 9;
      case 'greater_or_equal':
        return 10;
    }
  }
}
