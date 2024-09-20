///
/// Copyright © 2016-2022 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeComponentsModule } from '@home/components/home-components.module';
import { SchedulerJobRoutingModule } from '@home/pages/scheduler-job/scheduler-job-routing.module';
import { SchedulerJobComponent } from '@home/pages/scheduler-job/scheduler-job.component';
import {SchedulerJobOtaUpdateComponent} from '@home/pages/scheduler-job/scheduler-job-ota-update.component';
import {SchedulerJobScheduleComponent} from '@home/pages/scheduler-job/scheduler-job-schedule.component';
import {TargetSelectComponent} from '@home/pages/scheduler-job/target-select.component';
import {SchedulerJobConfigurationComponent} from '@home/pages/scheduler-job/scheduler-job-configuration.component';
import {SchedulerJobAttributeUpdateComponent} from '@home/pages/scheduler-job/scheduler-job-attribute-update.component';
import {AttributeKeyValueTableComponent} from '@home/pages/scheduler-job/attribute-key-value-table.component';
import {ScheduleJobTabsComponent} from "@home/pages/scheduler-job/schedule-job-tabs.component";

@NgModule({
  declarations: [
    SchedulerJobComponent,
    SchedulerJobScheduleComponent,
    SchedulerJobConfigurationComponent,
    SchedulerJobOtaUpdateComponent,
    SchedulerJobAttributeUpdateComponent,
    AttributeKeyValueTableComponent,
    TargetSelectComponent,
    ScheduleJobTabsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeComponentsModule,
    SchedulerJobRoutingModule
  ]
})
export class SchedulerJobModule { }
