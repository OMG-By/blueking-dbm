/*
 * TencentBlueKing is pleased to support the open source community by making 蓝鲸智云-DB管理系统(BlueKing-BK-DBM) available.
 *
 * Copyright (C) 2017-2023 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
 * the specific language governing permissions and limitations under the License.
 */

import type { ISearchValue } from 'bkui-vue/lib/search-select/utils';

import { getPermissionRules } from '@services/permission';
import type { PermissionRuleAccount } from '@services/types/permission';

type IPermissioRule = ServiceReturnType<typeof getPermissionRules>['results'][number];

export interface PermissionTableRow extends IPermissioRule {
  isExpand: boolean;
}

export interface PermissionState {
  isAnomalies: boolean;
  isLoading: boolean;
  search: ISearchValue[];
  data: PermissionTableRow[];
}

export interface StrengthItem {
  keys: string[];
  text: string;
}

export interface AccountColumn {
  label: string;
  key: keyof PermissionRuleAccount;
  value?: string;
}
