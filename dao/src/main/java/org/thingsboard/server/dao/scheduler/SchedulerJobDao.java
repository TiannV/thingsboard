/**
 * Copyright © 2016-2022 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.thingsboard.server.dao.scheduler;

import org.springframework.data.repository.CrudRepository;
import org.thingsboard.server.common.data.page.PageData;
import org.thingsboard.server.common.data.page.PageLink;
import org.thingsboard.server.common.data.scheduler.SchedulerJob;
import org.thingsboard.server.common.data.scheduler.SchedulerJobInfo;
import org.thingsboard.server.dao.Dao;
import org.thingsboard.server.dao.TenantEntityDao;
import org.thingsboard.server.dao.model.sql.SchedulerJobEntity;

import java.util.UUID;

/**
 * The Interface SchedulerJob Dao.
 */
public interface SchedulerJobDao extends Dao<SchedulerJob>, TenantEntityDao {

    CrudRepository<SchedulerJobEntity, UUID> getCrudRepository();

    /**
     * Find schedulerJobs by tenantId and page link.
     *
     * @param tenantId the tenantId
     * @param pageLink the page link
     * @return the list of schedulerJob objects
     */
    PageData<SchedulerJob> findSchedulerJobsByTenantId(UUID tenantId, PageLink pageLink);
}
