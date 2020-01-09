import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicModule } from 'ng-dynamic-component';
import { MaterialModule } from '../material/material.module';
import { PulseModule } from '../pulse/pulse.module';
// tslint:disable max-line-length
import { AccountTagsEffects } from '../reducers/account-tags/redux/account-tags.effects';
import { accountTagsReducers } from '../reducers/account-tags/redux/account-tags.reducers';
import { AccountsEffects } from '../reducers/accounts/redux/accounts.effects';
import { accountReducers } from '../reducers/accounts/redux/accounts.reducers';
import { ServiceOfferingEffects } from '../reducers/service-offerings/redux/service-offerings.effects';
import { serviceOfferingReducers } from '../reducers/service-offerings/redux/service-offerings.reducers';
import { VirtualMachineCreationEffects } from '../reducers/vm/redux/vm-creation.effects';
import { VirtualMachinesEffects } from '../reducers/vm/redux/vm.effects';
import { virtualMachineReducers } from '../reducers/vm/redux/vm.reducers';
import { ZonesEffects } from '../reducers/zones/redux/zones.effects';
import { zoneReducers } from '../reducers/zones/redux/zones.reducers';
import { ServiceOfferingModule } from '../service-offering/service-offering.module';
import { DraggableSelectModule } from '../shared/components/draggable-select/draggable-select.module';

import { SharedModule } from '../shared/shared.module';
import { SnapshotModule } from '../snapshot/snapshot.module';
import { TagsModule } from '../tags/tags.module';
import { TemplateModule } from '../template';
import { VmSnapshotListDialogComponent } from './components/vm-snapshot-list-dialog/vm-snapshot-list-dialog.component';
import { VmSnapshotsSidebarCardComponent } from './components/vm-snapshots-sidebar-card/vm-snapshots-sidebar-card.component';
import { NetworkDetailContainerComponent } from './container/network-detail.container';
import { ServiceOfferingDialogContainerComponent } from './container/service-offering-dialog.container';
import { StorageDetailContainerComponent } from './container/storage-detail.container';
import { VmActionsContainerComponent } from './container/vm-actions.container';
import { VmDetailContainerComponent } from './container/vm-detail.container';
import { VMFilterContainerComponent } from './container/vm-filter.container';
import { VmSidebarContainerComponent } from './container/vm-sidebar.container';
import { VmTagsContainerComponent } from './container/vm-tags.container';
import { VmVolumeDetailsContainerComponent } from './container/vm-volume-details.container';
import { VirtualMachinePageContainerComponent } from './container/vm.container';
import { HttpAccessService, SshAccessService, VncAccessService } from './services';
import { VmActionsService } from './shared/vm-actions.service';
import { VmDestroyDialogComponent } from './shared/vm-destroy-dialog/vm-destroy-dialog.component';
import { VmPasswordComponent } from './shared/vm-password/vm-password.component';
import { VmService } from './shared/vm.service';
import { VmAccessComponent } from './vm-actions/vm-actions-component/vm-access.component';
import { VmActionsComponent } from './vm-actions/vm-actions-component/vm-actions.component';
import { VmPasswordDialogComponent } from './vm-actions/vm-reset-password-component/vm-password-dialog.component';
import { VmCreationAffinityGroupManagerComponent } from './vm-creation/components/affinity-group-manager/vm-creation-affinity-group-manager.component';
import { SecurityGroupManagerExistingGroupComponent } from './vm-creation/components/security-group-rules-manager/security-group-manager-existing-group/security-group-manager-existing-group.component';
import { VmCreationSecurityGroupRulesManagerComponent } from './vm-creation/components/security-group-rules-manager/vm-creation-security-group-rules-manager.component';
import { VmCreationSecurityGroupContainerComponent } from './vm-creation/components/security-group/containers/vm-creation-security-group.container';
import { VmCreationSecurityGroupComponent } from './vm-creation/components/security-group/vm-creation-security-group.component';
import { ServiceOfferingSelectorComponent } from './vm-creation/components/service-offering-selector/service-offering-selector.component';
import { VmCreationContainerComponent } from './vm-creation/containers/vm-creation.container';
import { PostdeploymentComponent } from './vm-creation/postdeployment/postdeployment.component';
import { VmCreationServiceOfferingContainerComponent } from './vm-creation/service-offering/vm-creation-service-offering.container';
import { VmCreationSshKeySelectorComponent } from './vm-creation/ssh-key-selector/ssh-key-selector.component';
import { VmCreationAgreementComponent } from './vm-creation/template/agreement/vm-creation-agreement.component';
import { InstallationSourceDialogComponent } from './vm-creation/template/containers/installation-source-dialog.component';
import { VmCreationTemplateContainerComponent } from './vm-creation/template/containers/vm-creation-template.container';
import { VmCreationTemplateComponent } from './vm-creation/template/vm-creation-template.component';
import { VmTemplateDialogComponent } from './vm-creation/template/vm-template-dialog.component';
import { VmCreationDialogComponent } from './vm-creation/vm-creation-dialog.component';
import { VmCreationComponent } from './vm-creation/vm-creation.component';
import { VmFilterComponent } from './vm-filter/vm-filter.component';
import { VmListCardItemComponent } from './vm-list-item/card-item/vm-list-card-item.component';
import { VmListRowItemComponent } from './vm-list-item/row-item/vm-list-row-item.component';
import { VmListComponent } from './vm-list/vm-list.component';
import { VmPageComponent } from './vm-page/vm-page.component';
import {
  VmCreationAffinityGroupListComponent,
  VmDetailsAffinityGroupListComponent,
} from './vm-sidebar/affinity-group-selector';
import { AffinityGroupSelectorContainerComponent } from './vm-sidebar/affinity-group-selector/affinity-group-selector-container.component';
import { AffinityGroupSelectorComponent } from './vm-sidebar/affinity-group-selector/affinity-group-selector.component';
import { VmColorComponent } from './vm-sidebar/color/vm-color.component';
import { InstanceGroupSelectorComponent } from './vm-sidebar/instance-group-selector/instance-group-selector.component';
import { FirewallRulesDetailComponent } from './vm-sidebar/network-detail/firewall-rules/firewall-rules-detail.component';
import { FirewallRulesDetailContainerComponent } from './vm-sidebar/network-detail/firewall-rules/firewall-rules-detail.container';
import { NicListComponent } from './vm-sidebar/network-detail/nics/nic-list/nic-list.component';
import { NicFieldsComponent } from './vm-sidebar/network-detail/nics/nic/nic-fields/nic-fields.component';
import { NicComponent } from './vm-sidebar/network-detail/nics/nic/nic.component';
import { SecondaryIpListComponent } from './vm-sidebar/network-detail/nics/secondary-ip-list/secondary-ip-list.component';
import { SecondaryIpComponent } from './vm-sidebar/network-detail/nics/secondary-ip/secondary-ip.component';
import { SshKeypairResetComponent } from './vm-sidebar/ssh-selector/ssh-keypair-reset.component';
import { StatisticsComponent } from './vm-sidebar/statistics/statistics.component';
import { IsoComponent } from './vm-sidebar/storage-detail/iso/iso.component';
import { VolumeAttachmentDetailComponent } from './vm-sidebar/storage-detail/volume-attachment/volume-attachment-detail/volume-attachment-detail.component';
import { VolumeAttachmentDialogComponent } from './vm-sidebar/storage-detail/volume-attachment/volume-attchment-dialog/volume-attachment-dialog.component';
import { SnapshotCreationComponent } from './vm-sidebar/storage-detail/volumes/snapshot-creation/snapshot-creation.component';
import { SnapshotModalComponent } from './vm-sidebar/storage-detail/volumes/snapshot/snapshot-modal.component';
import { SnapshotModalContainerComponent } from './vm-sidebar/storage-detail/volumes/snapshot/snapshot-modal.container';
import { SnapshotsComponent } from './vm-sidebar/storage-detail/volumes/snapshot/snapshots.component';
import { SnapshotsContainerComponent } from './vm-sidebar/storage-detail/volumes/snapshot/snapshots.container';
import { VolumeDetailsComponent } from './vm-sidebar/storage-detail/volumes/volume-details/volume-details.component';
import { VolumeComponent } from './vm-sidebar/storage-detail/volumes/volume/volume.component';
import { VolumesComponent } from './vm-sidebar/storage-detail/volumes/volumes.component';
import { AffinityGroupComponent } from './vm-sidebar/vm-detail/affinity-group/affinity-group.component';
import { VmDetailComponent } from './vm-sidebar/vm-detail/detail/vm-detail.component';
import { InstanceGroupComponent } from './vm-sidebar/vm-detail/instance-group/instance-group.component';
import { ServiceOfferingDetailsComponent } from './vm-sidebar/vm-detail/service-offering-details/service-offering-details.component';
import { SshKeypairComponent } from './vm-sidebar/vm-detail/ssh/ssh-keypair.component';
import { VmDetailTemplateComponent } from './vm-sidebar/vm-detail/template/vm-detail-template.component';
import { VmSnapshotCreationDialogComponent } from './vm-sidebar/vm-detail/vm-snapshot-creation-dialog/vm-snapshot-creation-dialog.component';
import { VmSidebarComponent } from './vm-sidebar/vm-sidebar.component';
import { VmTagsComponent } from './vm-sidebar/vm-tags/vm-tags.component';
import { VmLogsModule } from '../vm-logs/vm-logs.module';
import { ResourceQuotasModule } from '../resource-quotas/resource-quotas.module';
import { SgListContainerComponent } from './container/sg-list.container';
import { VmsSgListComponent } from './vm-sidebar/vms-sg-list/vms-sg-list.component';
import { VmApiLogComponent } from './vm-creation/api-log/vm-api-log.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MatExpansionModule } from '@angular/material';
import { VmUserDataDialogComponent } from './vm-sidebar/vm-detail/vm-user-data-dialog/vm-user-data-dialog.component';
import { VmHttpAccessLinkComponent } from './vm-actions/vm-actions-component/vm-http-access-link/vm-http-access-link.component';
import { VmHttpAddressPipe } from './vm-actions/vm-actions-component/vm-http-address.pipe';
import { ValueEqualToValidatorDirective } from './shared/vm-destroy-dialog/value-equal-to-validator.directive';
import { PasswordComponent } from './vm-actions/vm-actions-component/password/password.component';
import { VmStopDialogComponent } from './shared/vm-stop-dialog/vm-stop-dialog.component';

// tslint:enable max-line-length

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    DynamicModule.withComponents([VmListCardItemComponent]),
    DynamicModule.withComponents([VmListRowItemComponent]),
    DraggableSelectModule,
    ClipboardModule,
    PulseModule,
    MatExpansionModule,
    RouterModule,
    ServiceOfferingModule,
    SnapshotModule,
    TagsModule,
    TemplateModule,
    TranslateModule,
    ResourceQuotasModule,
    VmLogsModule,
    StoreModule.forFeature('virtualMachines', virtualMachineReducers),
    StoreModule.forFeature('accounts', accountReducers),
    StoreModule.forFeature('tags', accountTagsReducers),
    StoreModule.forFeature('zones', zoneReducers),
    StoreModule.forFeature('service-offerings', serviceOfferingReducers),
    EffectsModule.forFeature([
      VirtualMachinesEffects,
      VirtualMachineCreationEffects,
      ZonesEffects,
      AccountsEffects,
      AccountTagsEffects,
      ServiceOfferingEffects,
    ]),
  ],
  declarations: [
    AffinityGroupComponent,
    AffinityGroupSelectorComponent,
    AffinityGroupSelectorContainerComponent,
    VmDetailsAffinityGroupListComponent,
    VmCreationAffinityGroupListComponent,
    FirewallRulesDetailComponent,
    FirewallRulesDetailContainerComponent,
    NetworkDetailContainerComponent,
    ServiceOfferingDetailsComponent,
    ServiceOfferingDialogContainerComponent,
    SnapshotsComponent,
    SnapshotsContainerComponent,
    VolumeAttachmentDetailComponent,
    VolumeAttachmentDialogComponent,
    StatisticsComponent,
    StorageDetailContainerComponent,
    SshKeypairComponent,
    SshKeypairResetComponent,
    VmDetailTemplateComponent,
    VmDetailComponent,
    VirtualMachinePageContainerComponent,
    VmPageComponent,
    VmListComponent,
    VmActionsComponent,
    VmActionsContainerComponent,
    VmAccessComponent,
    VmColorComponent,
    VmCreationContainerComponent,
    VmCreationComponent,
    VmCreationDialogComponent,
    VmCreationAgreementComponent,
    VmListCardItemComponent,
    VmListRowItemComponent,
    VmDetailContainerComponent,
    VMFilterContainerComponent,
    VmFilterComponent,
    VmSidebarContainerComponent,
    VmSidebarComponent,
    VmCreationTemplateContainerComponent,
    VmCreationTemplateComponent,
    VmCreationServiceOfferingContainerComponent,
    VmCreationSshKeySelectorComponent,
    VmTemplateDialogComponent,
    VmVolumeDetailsContainerComponent,
    VolumeDetailsComponent,
    InstanceGroupComponent,
    InstanceGroupSelectorComponent,
    IsoComponent,
    VmTagsContainerComponent,
    VmTagsComponent,
    VmDestroyDialogComponent,
    VolumesComponent,
    VolumeComponent,
    SnapshotCreationComponent,
    SnapshotModalComponent,
    SnapshotModalContainerComponent,
    VmCreationSecurityGroupContainerComponent,
    VmCreationSecurityGroupComponent,
    VmCreationSecurityGroupContainerComponent,
    SecurityGroupManagerExistingGroupComponent,
    VmCreationSecurityGroupRulesManagerComponent,
    VmCreationAffinityGroupManagerComponent,
    NicComponent,
    NicListComponent,
    SecondaryIpComponent,
    SecondaryIpListComponent,
    NicFieldsComponent,
    PostdeploymentComponent,
    VmApiLogComponent,
    VmPasswordDialogComponent,
    ServiceOfferingSelectorComponent,
    InstallationSourceDialogComponent,
    VmPasswordComponent,
    VmSnapshotsSidebarCardComponent,
    VmSnapshotCreationDialogComponent,
    VmSnapshotListDialogComponent,
    VmTagsContainerComponent,
    VmsSgListComponent,
    SgListContainerComponent,
    VmUserDataDialogComponent,
    VmHttpAccessLinkComponent,
    VmHttpAddressPipe,
    ValueEqualToValidatorDirective,
    PasswordComponent,
    VmStopDialogComponent,
  ],
  providers: [VmActionsService, VmService, SshAccessService, HttpAccessService, VncAccessService],
  entryComponents: [
    AffinityGroupSelectorContainerComponent,
    VmDetailsAffinityGroupListComponent,
    VmCreationAffinityGroupListComponent,
    InstanceGroupSelectorComponent,
    VmCreationContainerComponent,
    VmDestroyDialogComponent,
    VmStopDialogComponent,
    InstallationSourceDialogComponent,
    VmCreationAgreementComponent,
    SnapshotCreationComponent,
    SnapshotModalContainerComponent,
    VolumeAttachmentDialogComponent,
    SshKeypairResetComponent,
    VmCreationSecurityGroupContainerComponent,
    VmCreationServiceOfferingContainerComponent,
    PostdeploymentComponent,
    VmApiLogComponent,
    VmPasswordDialogComponent,
    VmAccessComponent,
    ServiceOfferingDialogContainerComponent,
    VmSnapshotCreationDialogComponent,
    VmSnapshotListDialogComponent,
    ServiceOfferingDialogContainerComponent,
    SgListContainerComponent,
    VmUserDataDialogComponent,
  ],
})
export class VmModule {}
