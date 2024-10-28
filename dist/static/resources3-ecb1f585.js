import{d as e}from"./sanity-9aea2245.js";const n=e("structure",{"action.copy-document-url.label":"Copy Document URL","action.delete.disabled.not-ready":"Operation not ready","action.delete.disabled.nothing-to-delete":"This document doesn't yet exist or is already deleted","action.delete.label":"Delete","action.delete.running.label":"Deleting…","action.discard-changes.confirm-dialog.confirm-discard-changes":"Are you sure you want to discard all changes since last published?","action.discard-changes.disabled.no-change":"This document has no unpublished changes","action.discard-changes.disabled.not-published":"This document is not published","action.discard-changes.disabled.not-ready":"Operation not ready","action.discard-changes.label":"Discard changes","action.duplicate.disabled.not-ready":"Operation not ready","action.duplicate.disabled.nothing-to-duplicate":"This document doesn't yet exist so there's nothing to duplicate","action.duplicate.label":"Duplicate","action.duplicate.running.label":"Duplicating…","action.publish.already-published.no-time-ago.tooltip":"Already published","action.publish.already-published.tooltip":"Published {{timeSincePublished}}","action.publish.disabled.not-ready":"Operation not ready","action.publish.draft.label":"Publish","action.publish.live-edit.label":"Publish","action.publish.live-edit.publish-disabled":"Cannot publish since Live Edit is enabled for this document type","action.publish.live-edit.tooltip":"Live Edit is enabled for this content type and publishing happens automatically as you make changes","action.publish.no-changes.tooltip":"No unpublished changes","action.publish.published.label":"Published","action.publish.running.label":"Publishing…","action.publish.validation-issues.tooltip":"There are validation errors that need to be fixed before this document can be published","action.publish.waiting":"Waiting for tasks to finish before publishing","action.restore.confirm.message":"Are you sure you want to restore this document?","action.restore.disabled.cannot-restore-initial":"You can't restore to the initial version","action.restore.label":"Restore","action.restore.tooltip":"Restore to this version","action.unpublish.disabled.not-published":"This document is not published","action.unpublish.disabled.not-ready":"Operation not ready","action.unpublish.label":"Unpublish","action.unpublish.live-edit.disabled":"This document has live edit enabled and cannot be unpublished","banners.deleted-document-banner.restore-button.text":"Restore most recent version","banners.deleted-document-banner.text":"This document has been deleted.","banners.deprecated-document-type-banner.text":"This document type has been deprecated.","banners.live-edit-draft-banner.discard.tooltip":"Discard draft","banners.live-edit-draft-banner.publish.tooltip":"Publish to continue editing","banners.live-edit-draft-banner.text":"The type <strong>{{schemaType}}</strong> has <code>liveEdit</code> enabled, but a draft version of this document exists. Publish or discard the draft in order to continue live editing it.","banners.permission-check-banner.missing-permission_create_one":"Your role <Roles/> does not have permission to publish this document.","banners.permission-check-banner.missing-permission_create_other":"Your roles <Roles/> do not have permission to publish this document.","banners.permission-check-banner.missing-permission_update_one":"Your role <Roles/> does not have permission to edit this document.","banners.permission-check-banner.missing-permission_update_other":"Your roles <Roles/> do not have permission to edit this document.","banners.permission-check-banner.request-permission-button.sent":"Editor request sent","banners.permission-check-banner.request-permission-button.text":"Ask to edit","banners.reference-changed-banner.reason-changed.reload-button.text":"Reload reference","banners.reference-changed-banner.reason-changed.text":"This reference has changed since you opened it.","banners.reference-changed-banner.reason-removed.close-button.text":"Close reference","banners.reference-changed-banner.reason-removed.text":"This reference has been removed since you opened it.","browser-document-title.new-document":"New {{schemaType}}","browser-document-title.untitled-document":"Untitled","buttons.action-menu-button.aria-label":"Open document actions","buttons.action-menu-button.tooltip":"Document actions","buttons.split-pane-button.aria-label":"Split pane right","buttons.split-pane-button.tooltip":"Split pane right","buttons.split-pane-close-button.title":"Close split pane","buttons.split-pane-close-group-button.title":"Close pane group","confirm-delete-dialog.cancel-button.text":"Cancel","confirm-delete-dialog.cdr-summary.document-count_one":"1 document","confirm-delete-dialog.cdr-summary.document-count_other":"{{count}} documents","confirm-delete-dialog.cdr-summary.subtitle_one":"Dataset: {{datasets}}","confirm-delete-dialog.cdr-summary.subtitle_other":"Datasets: {{datasets}}","confirm-delete-dialog.cdr-summary.subtitle_unavailable_one":"Unavailable dataset","confirm-delete-dialog.cdr-summary.subtitle_unavailable_other":"Unavailable datasets","confirm-delete-dialog.cdr-summary.title_one":"{{documentCount}} in another dataset","confirm-delete-dialog.cdr-summary.title_other":"{{documentCount}} in {{count}} datasets","confirm-delete-dialog.cdr-table.copy-id-button.tooltip":"Copy ID to clipboard","confirm-delete-dialog.cdr-table.dataset.label":"Dataset","confirm-delete-dialog.cdr-table.document-id.label":"Document ID","confirm-delete-dialog.cdr-table.id-copied-toast.title":"Copied document ID to clipboard!","confirm-delete-dialog.cdr-table.project-id.label":"Project ID","confirm-delete-dialog.confirm-anyway-button.text_delete":"Delete anyway","confirm-delete-dialog.confirm-anyway-button.text_unpublish":"Unpublish anyway","confirm-delete-dialog.confirm-button.text_delete":"Delete now","confirm-delete-dialog.confirm-button.text_unpublish":"Unpublish now","confirm-delete-dialog.confirmation.text_delete":"Are you sure you want to delete “<DocumentTitle/>”?","confirm-delete-dialog.confirmation.text_unpublish":"Are you sure you want to unpublish “<DocumentTitle/>”?","confirm-delete-dialog.error.message.text":"An error occurred while loading referencing documents.","confirm-delete-dialog.error.retry-button.text":"Retry","confirm-delete-dialog.error.title.text":"Error","confirm-delete-dialog.header.text_delete":"Delete document?","confirm-delete-dialog.header.text_unpublish":"Unpublish document?","confirm-delete-dialog.loading.text":"Looking for referring documents…","confirm-delete-dialog.other-reference-count.title_one":"1 other reference not show","confirm-delete-dialog.other-reference-count.title_other":"{{count}} other references not shown","confirm-delete-dialog.other-reference-count.tooltip":"We can't display metadata for these references due to a missing access token for the related datasets.","confirm-delete-dialog.preview-item.preview-unavailable.subtitle":"ID: {{documentId}}","confirm-delete-dialog.preview-item.preview-unavailable.title":"Preview unavailable","confirm-delete-dialog.referential-integrity-disclaimer.text_delete":"If you delete this document, documents that refer to it will no longer be able to access it.","confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish":"If you unpublish this document, documents that refer to it will no longer be able to access it.","confirm-delete-dialog.referring-document-count.text_one":"1 document refers to “<DocumentTitle/>”","confirm-delete-dialog.referring-document-count.text_other":"{{count}} documents refer to “<DocumentTitle/>”","confirm-delete-dialog.referring-documents-descriptor.text_delete":"You may not be able to delete “<DocumentTitle/>” because the following documents refer to it:","confirm-delete-dialog.referring-documents-descriptor.text_unpublish":"You may not be able to unpublish “<DocumentTitle/>” because the following documents refer to it:","confirm-dialog.cancel-button.fallback-text":"Cancel","confirm-dialog.confirm-button.fallback-text":"Confirm","default-definition.content-title":"Content","doc-title.error.text":"Error: {{errorMessage}}","doc-title.fallback.text":"Untitled","doc-title.unknown-schema-type.text":"Unknown schema type: {{schemaType}}","document-inspector.close-button.tooltip":"Close","document-inspector.dialog.title":"Inspecting <DocumentTitle/>","document-inspector.dialog.title-no-value":"No value","document-inspector.menu-item.title":"Inspect","document-inspector.search.placeholder":"Search","document-inspector.view-mode.parsed":"Parsed","document-inspector.view-mode.raw-json":"Raw JSON","document-view.form-view.form-hidden":"This form is hidden","document-view.form-view.form-title-fallback":"Untitled","document-view.form-view.loading":"Loading document…","document-view.form-view.sync-lock-toast.description":"Please hold tight while the document is synced. This usually happens right after the document has been published, and it should not take more than a few seconds","document-view.form-view.sync-lock-toast.title":"Syncing document…","insufficient-permissions-message-tooltip.loading-text":"Loading…","menu-item-groups.actions-group":"Actions","menu-item-groups.layout-group":"Layout","menu-item-groups.sorting-group":"Sort","menu-items.layout.compact-view":"Compact view","menu-items.layout.detailed-view":"Detailed view","menu-items.sort-by.created":"Sort by Created","menu-items.sort-by.last-edited":"Sort by Last Edited","no-document-types-screen.link-text":"Learn how to add a document type →","no-document-types-screen.subtitle":"Please define at least one document type in your schema.","no-document-types-screen.title":"No document types","pane-header.back-button.text":"Back","pane-header.context-menu-button.tooltip":"Show menu","pane-header.create-menu.label":"Create","pane-header.create-new-button.tooltip":"Create new document","pane-header.disabled-created-button.aria-label":"Insufficient permissions","pane-item.draft-status.has-draft.tooltip":"Edited <RelativeTime/>","pane-item.draft-status.no-draft.tooltip":"No unpublished edits","pane-item.missing-schema-type.subtitle":"Document: <Code>{{documentId}}</Code>","pane-item.missing-schema-type.title":"No schema found for type <Code>{{documentType}}</Code>","pane-item.published-status.has-published.tooltip":"Published <RelativeTime/>","pane-item.published-status.no-published.tooltip":"No unpublished edits","panes.document-header-title.error.text":"Error: {{error}}","panes.document-header-title.new.text":"New {{schemaType}}","panes.document-header-title.untitled.text":"Untitled","panes.document-list-pane.error.text":"Error: <Code>{{error}}</Code>","panes.document-list-pane.error.title":"Could not fetch list items","panes.document-list-pane.max-items.text":"Displaying a maximum of {{limit}} documents","panes.document-list-pane.no-documents-of-type.text":"No documents of this type","panes.document-list-pane.no-documents.text":"No results found","panes.document-list-pane.no-matching-documents.text":"No matching documents","panes.document-list-pane.search-input.aria-label":"Search list","panes.document-list-pane.search-input.placeholder":"Search list","panes.document-operation-results.error.summary.title":"Details","panes.document-operation-results.operation-error":"An error occurred during {{context}}","panes.document-operation-results.operation-error_delete":"An error occurred while attempting to delete this document. This usually means that there are other documents that refers to it.","panes.document-operation-results.operation-error_unpublish":"An error occurred while attempting to unpublish this document. This usually means that there are other documents that refers to it.","panes.document-operation-results.operation-success":"Successfully performed {{op}} on document","panes.document-operation-results.operation-success_copy-url":"Document URL copied to clipboard","panes.document-operation-results.operation-success_delete":"The document was successfully deleted","panes.document-operation-results.operation-success_discardChanges":"All changes since last publish has now been discarded. The discarded draft can still be recovered from history","panes.document-operation-results.operation-success_duplicate":"The document was successfully duplicated","panes.document-operation-results.operation-success_publish":"<Strong>{{title}}</Strong> was published","panes.document-operation-results.operation-success_restore":"<Strong>{{title}}</Strong> was restored","panes.document-operation-results.operation-success_unpublish":"<Strong>{{title}}</Strong> was unpublished. A draft has been created from the latest published version.","panes.document-operation-results.operation-undefined-title":"Untitled","panes.document-pane-provider.reconnecting.title":"Connection lost. Reconnecting…","panes.document-pane.document-not-found.loading":"Loading document…","panes.document-pane.document-not-found.text":"The document type is not defined, and a document with the <Code>{{id}}</Code> identifier could not be found.","panes.document-pane.document-not-found.title":"The document was not found","panes.document-pane.document-unknown-type.text":"This document has the schema type <Code>{{documentType}}</Code>, which is not defined as a type in the local content studio schema.","panes.document-pane.document-unknown-type.title":"Unknown document type: <Code>{{documentType}}</Code>","panes.document-pane.document-unknown-type.without-schema.text":"This document does not exist, and no schema type was specified for it.","panes.resolving.default-message":"Loading…","panes.resolving.slow-resolve-message":"Still loading…","panes.unknown-pane-type.missing-type.text":"Structure item is missing required <Code>type</Code> property.","panes.unknown-pane-type.title":"Unknown pane type","panes.unknown-pane-type.unknown-type.text":"Structure item of type <Code>{{type}}</Code> is not a known entity.","production-preview.menu-item.title":"Open preview","request-permission-dialog.confirm-button.text":"Send request","request-permission-dialog.description.text":"Your request will be sent to the project administrator(s). If you'd like, you can also include a note","request-permission-dialog.header.text":"Ask for edit access","request-permission-dialog.note-input.description.text":"If you'd like, you can add a note","request-permission-dialog.note-input.placeholder.text":"Add note...","request-permission-dialog.warning.denied.text":"Your request to access this project has been declined.","request-permission-dialog.warning.limit-reached.text":"You've reached the limit for role requests across all projects. Please wait before submitting more requests or contact an administrator for assistance.","status-bar.document-status-pulse.status.saved.text":"Saved","status-bar.document-status-pulse.status.syncing.text":"Saving...","status-bar.publish-status-button.last-published-time.aria-label":"Last published {{relativeTime}}","status-bar.publish-status-button.last-published-time.tooltip":"Last published <RelativeTime/>","status-bar.publish-status-button.last-updated-time.aria-label":"Last updated {{relativeTime}}","status-bar.publish-status-button.last-updated-time.tooltip":"Last updated <RelativeTime/>","status-bar.review-changes-button.aria-label":"Review changes","status-bar.review-changes-button.status.saved.text":"Saved!","status-bar.review-changes-button.status.syncing.text":"Saving...","status-bar.review-changes-button.tooltip.changes-saved":"Changes saved","status-bar.review-changes-button.tooltip.text":"Review changes","structure-error.docs-link.text":"View documentation","structure-error.error.label":"Error","structure-error.header.text":"Encountered an error while reading structure","structure-error.reload-button.text":"Reload","structure-error.structure-path.label":"Structure path"});export{n as default};
