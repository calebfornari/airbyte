/*
 * Copyright (c) 2021 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.server.controllers;

import io.airbyte.api.model.CheckConnectionRead;
import io.airbyte.api.model.CheckOperationRead;
import io.airbyte.api.model.CompleteDestinationOAuthRequest;
import io.airbyte.api.model.CompleteSourceOauthRequest;
import io.airbyte.api.model.ConnectionCreate;
import io.airbyte.api.model.ConnectionIdRequestBody;
import io.airbyte.api.model.ConnectionRead;
import io.airbyte.api.model.ConnectionReadList;
import io.airbyte.api.model.ConnectionSearch;
import io.airbyte.api.model.ConnectionState;
import io.airbyte.api.model.ConnectionUpdate;
import io.airbyte.api.model.CustomDestinationDefinitionCreate;
import io.airbyte.api.model.CustomDestinationDefinitionUpdate;
import io.airbyte.api.model.CustomSourceDefinitionCreate;
import io.airbyte.api.model.CustomSourceDefinitionUpdate;
import io.airbyte.api.model.DbMigrationExecutionRead;
import io.airbyte.api.model.DbMigrationReadList;
import io.airbyte.api.model.DbMigrationRequestBody;
import io.airbyte.api.model.DestinationCoreConfig;
import io.airbyte.api.model.DestinationCreate;
import io.airbyte.api.model.DestinationDefinitionCreate;
import io.airbyte.api.model.DestinationDefinitionIdRequestBody;
import io.airbyte.api.model.DestinationDefinitionIdWithWorkspaceId;
import io.airbyte.api.model.DestinationDefinitionRead;
import io.airbyte.api.model.DestinationDefinitionReadList;
import io.airbyte.api.model.DestinationDefinitionSpecificationRead;
import io.airbyte.api.model.DestinationDefinitionUpdate;
import io.airbyte.api.model.DestinationIdRequestBody;
import io.airbyte.api.model.DestinationOauthConsentRequest;
import io.airbyte.api.model.DestinationRead;
import io.airbyte.api.model.DestinationReadList;
import io.airbyte.api.model.DestinationSearch;
import io.airbyte.api.model.DestinationUpdate;
import io.airbyte.api.model.HealthCheckRead;
import io.airbyte.api.model.ImportRead;
import io.airbyte.api.model.ImportRequestBody;
import io.airbyte.api.model.JobDebugInfoRead;
import io.airbyte.api.model.JobIdRequestBody;
import io.airbyte.api.model.JobInfoRead;
import io.airbyte.api.model.JobListRequestBody;
import io.airbyte.api.model.JobReadList;
import io.airbyte.api.model.LogsRequestBody;
import io.airbyte.api.model.Notification;
import io.airbyte.api.model.NotificationRead;
import io.airbyte.api.model.OAuthConsentRead;
import io.airbyte.api.model.OperationCreate;
import io.airbyte.api.model.OperationIdRequestBody;
import io.airbyte.api.model.OperationRead;
import io.airbyte.api.model.OperationReadList;
import io.airbyte.api.model.OperationUpdate;
import io.airbyte.api.model.OperatorConfiguration;
import io.airbyte.api.model.PrivateDestinationDefinitionRead;
import io.airbyte.api.model.PrivateDestinationDefinitionReadList;
import io.airbyte.api.model.PrivateSourceDefinitionRead;
import io.airbyte.api.model.PrivateSourceDefinitionReadList;
import io.airbyte.api.model.SetInstancewideDestinationOauthParamsRequestBody;
import io.airbyte.api.model.SetInstancewideSourceOauthParamsRequestBody;
import io.airbyte.api.model.SlugRequestBody;
import io.airbyte.api.model.SourceCoreConfig;
import io.airbyte.api.model.SourceCreate;
import io.airbyte.api.model.SourceDefinitionCreate;
import io.airbyte.api.model.SourceDefinitionIdRequestBody;
import io.airbyte.api.model.SourceDefinitionIdWithWorkspaceId;
import io.airbyte.api.model.SourceDefinitionRead;
import io.airbyte.api.model.SourceDefinitionReadList;
import io.airbyte.api.model.SourceDefinitionSpecificationRead;
import io.airbyte.api.model.SourceDefinitionUpdate;
import io.airbyte.api.model.SourceDiscoverSchemaRead;
import io.airbyte.api.model.SourceDiscoverSchemaRequestBody;
import io.airbyte.api.model.SourceIdRequestBody;
import io.airbyte.api.model.SourceOauthConsentRequest;
import io.airbyte.api.model.SourceRead;
import io.airbyte.api.model.SourceReadList;
import io.airbyte.api.model.SourceSearch;
import io.airbyte.api.model.SourceUpdate;
import io.airbyte.api.model.UploadRead;
import io.airbyte.api.model.WebBackendConnectionCreate;
import io.airbyte.api.model.WebBackendConnectionRead;
import io.airbyte.api.model.WebBackendConnectionReadList;
import io.airbyte.api.model.WebBackendConnectionRequestBody;
import io.airbyte.api.model.WebBackendConnectionSearch;
import io.airbyte.api.model.WebBackendConnectionUpdate;
import io.airbyte.api.model.WorkspaceCreate;
import io.airbyte.api.model.WorkspaceGiveFeedback;
import io.airbyte.api.model.WorkspaceIdRequestBody;
import io.airbyte.api.model.WorkspaceRead;
import io.airbyte.api.model.WorkspaceReadList;
import io.airbyte.api.model.WorkspaceUpdate;
import io.airbyte.api.model.WorkspaceUpdateName;
import io.airbyte.config.Configs.WorkerEnvironment;
import io.airbyte.config.helpers.LogConfigs;
import io.airbyte.config.persistence.ConfigNotFoundException;
import io.airbyte.server.errors.BadObjectSchemaKnownException;
import io.airbyte.server.errors.IdNotFoundKnownException;
import io.airbyte.server.handlers.ArchiveHandler;
import io.airbyte.server.handlers.ConnectionsHandler;
import io.airbyte.server.handlers.DbMigrationHandler;
import io.airbyte.server.handlers.DestinationDefinitionsHandler;
import io.airbyte.server.handlers.DestinationHandler;
import io.airbyte.server.handlers.HealthCheckHandler;
import io.airbyte.server.handlers.JobHistoryHandler;
import io.airbyte.server.handlers.LogsHandler;
import io.airbyte.server.handlers.OAuthHandler;
import io.airbyte.server.handlers.OpenApiConfigHandler;
import io.airbyte.server.handlers.OperationsHandler;
import io.airbyte.server.handlers.SchedulerHandler;
import io.airbyte.server.handlers.SourceDefinitionsHandler;
import io.airbyte.server.handlers.SourceHandler;
import io.airbyte.server.handlers.WebBackendConnectionsHandler;
import io.airbyte.server.handlers.WorkspacesHandler;
import io.airbyte.server.model.Workspace;
import io.airbyte.server.repository.WorkspaceRepository;
import io.airbyte.validation.json.JsonValidationException;
import io.micronaut.context.annotation.Value;
import io.micronaut.http.annotation.Controller;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import javax.inject.Inject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller(value = "/api/v1")
public class V1ApiController implements io.airbyte.api.V1Api {

  private static final Logger LOGGER = LoggerFactory.getLogger(V1ApiController.class);

  @Inject
  private ArchiveHandler archiveHandler;

  @Inject
  private ConnectionsHandler connectionsHandler;

  @Inject
  private DbMigrationHandler dbMigrationHandler;

  @Inject
  private DestinationHandler destinationHandler;

  @Inject
  private DestinationDefinitionsHandler destinationDefinitionsHandler;

  @Inject
  private HealthCheckHandler healthCheckHandler;

  @Inject
  private JobHistoryHandler jobHistoryHandler;

  @Inject
  private LogConfigs logConfigs;

  @Inject
  private LogsHandler logsHandler;

  @Inject
  private OAuthHandler oAuthHandler;

  @Inject
  private OpenApiConfigHandler openApiConfigHandler;

  @Inject
  private OperationsHandler operationsHandler;

  @Inject
  private SchedulerHandler schedulerHandler;

  @Inject
  private SourceHandler sourceHandler;

  @Inject
  private SourceDefinitionsHandler sourceDefinitionsHandler;

  @Inject
  private WebBackendConnectionsHandler webBackendConnectionsHandler;

  @Inject
  private WorkerEnvironment workerEnvironment;

  @Inject
  private WorkspacesHandler workspacesHandler;

  @Value("${airbyte.workspace.root}")
  private String workspaceRoot;

  @Inject
  private WorkspaceRepository workspaceRepository;

  @Override
  public JobInfoRead cancelJob(final JobIdRequestBody jobIdRequestBody) {
    return execute(() -> schedulerHandler.cancelJob(jobIdRequestBody));
  }

  @Override
  public CheckConnectionRead checkConnectionToDestination(final DestinationIdRequestBody destinationIdRequestBody) {
    return execute(() -> schedulerHandler.checkDestinationConnectionFromDestinationId(destinationIdRequestBody));
  }

  @Override
  public CheckConnectionRead checkConnectionToDestinationForUpdate(final DestinationUpdate destinationUpdate) {
    return execute(() -> schedulerHandler.checkDestinationConnectionFromDestinationIdForUpdate(destinationUpdate));
  }

  @Override
  public CheckConnectionRead checkConnectionToSource(final SourceIdRequestBody sourceIdRequestBody) {
    return execute(() -> schedulerHandler.checkSourceConnectionFromSourceId(sourceIdRequestBody));
  }

  @Override
  public CheckConnectionRead checkConnectionToSourceForUpdate(final SourceUpdate sourceUpdate) {
    return execute(() -> schedulerHandler.checkSourceConnectionFromSourceIdForUpdate(sourceUpdate));
  }

  @Override
  public CheckOperationRead checkOperation(final OperatorConfiguration operatorConfiguration) {
    return execute(() -> operationsHandler.checkOperation(operatorConfiguration));
  }

  @Override
  public DestinationRead cloneDestination(final DestinationIdRequestBody destinationIdRequestBody) {
    return execute(() -> destinationHandler.cloneDestination(destinationIdRequestBody));
  }

  @Override
  public SourceRead cloneSource(final SourceIdRequestBody sourceIdRequestBody) {
    return execute(() -> sourceHandler.cloneSource(sourceIdRequestBody));
  }

  @Override
  public Map<String, Object> completeDestinationOAuth(final CompleteDestinationOAuthRequest completeDestinationOAuthRequest) {
    return execute(() -> oAuthHandler.completeDestinationOAuth(completeDestinationOAuthRequest));
  }

  @Override
  public Map<String, Object> completeSourceOAuth(final CompleteSourceOauthRequest completeSourceOauthRequest) {
    return execute(() -> oAuthHandler.completeSourceOAuth(completeSourceOauthRequest));
  }

  @Override
  public ConnectionRead createConnection(final ConnectionCreate connectionCreate) {
    return execute(() -> connectionsHandler.createConnection(connectionCreate));
  }

  @Override
  public DestinationDefinitionRead createCustomDestinationDefinition(final CustomDestinationDefinitionCreate customDestinationDefinitionCreate) {
    return execute(() -> destinationDefinitionsHandler.createCustomDestinationDefinition(customDestinationDefinitionCreate));
  }

  @Override
  public SourceDefinitionRead createCustomSourceDefinition(final CustomSourceDefinitionCreate customSourceDefinitionCreate) {
    return execute(() -> sourceDefinitionsHandler.createCustomSourceDefinition(customSourceDefinitionCreate));
  }

  @Override
  public DestinationRead createDestination(final DestinationCreate destinationCreate) {
    return execute(() -> destinationHandler.createDestination(destinationCreate));
  }

  @Override
  public DestinationDefinitionRead createDestinationDefinition(final DestinationDefinitionCreate destinationDefinitionCreate) {
    return execute(() -> destinationDefinitionsHandler.createPrivateDestinationDefinition(destinationDefinitionCreate));
  }

  @Override
  public OperationRead createOperation(final OperationCreate operationCreate) {
    return execute(() -> operationsHandler.createOperation(operationCreate));
  }

  @Override
  public SourceRead createSource(final SourceCreate sourceCreate) {
    return execute(() -> sourceHandler.createSource(sourceCreate));
  }

  @Override
  public SourceDefinitionRead createSourceDefinition(final SourceDefinitionCreate sourceDefinitionCreate) {
    return execute(() -> sourceDefinitionsHandler.createPrivateSourceDefinition(sourceDefinitionCreate));
  }

  @Override
  public WorkspaceRead createWorkspace(final WorkspaceCreate workspaceCreate) {
    return execute(() -> workspacesHandler.createWorkspace(workspaceCreate));
  }

  @Override
  public void deleteConnection(final ConnectionIdRequestBody connectionIdRequestBody) {
    execute(() -> {
      operationsHandler.deleteOperationsForConnection(connectionIdRequestBody);
      connectionsHandler.deleteConnection(connectionIdRequestBody.getConnectionId());
      return null;
    });
  }

  @Override
  public void deleteCustomDestinationDefinition(final DestinationDefinitionIdWithWorkspaceId destinationDefinitionIdWithWorkspaceId) {
    execute(() -> {
      destinationDefinitionsHandler.deleteCustomDestinationDefinition(destinationDefinitionIdWithWorkspaceId);
      return null;
    });
  }

  @Override
  public void deleteCustomSourceDefinition(final SourceDefinitionIdWithWorkspaceId sourceDefinitionIdWithWorkspaceId) {
    execute(() -> {
      sourceDefinitionsHandler.deleteCustomSourceDefinition(sourceDefinitionIdWithWorkspaceId);
      return null;
    });
  }

  @Override
  public void deleteDestination(final DestinationIdRequestBody destinationIdRequestBody) {
    execute(() -> {
      destinationHandler.deleteDestination(destinationIdRequestBody);
      return null;
    });
  }

  @Override
  public void deleteDestinationDefinition(final DestinationDefinitionIdRequestBody destinationDefinitionIdRequestBody) {
    execute(() -> {
      destinationDefinitionsHandler.deleteDestinationDefinition(destinationDefinitionIdRequestBody);;
      return null;
    });
  }

  @Override
  public void deleteOperation(final OperationIdRequestBody operationIdRequestBody) {
    execute(() -> {
      operationsHandler.deleteOperation(operationIdRequestBody);
      return null;
    });
  }

  @Override
  public void deleteSource(final SourceIdRequestBody sourceIdRequestBody) {
    execute(() -> {
      sourceHandler.deleteSource(sourceIdRequestBody);
      return null;
    });
  }

  @Override
  public void deleteSourceDefinition(final SourceDefinitionIdRequestBody sourceDefinitionIdRequestBody) {
    execute(() -> {
      sourceDefinitionsHandler.deleteSourceDefinition(sourceDefinitionIdRequestBody);
      return null;
    });
  }

  @Override
  public void deleteWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    execute(() -> {
      workspacesHandler.deleteWorkspace(workspaceIdRequestBody);
      return null;
    });
  }

  @Override
  public SourceDiscoverSchemaRead discoverSchemaForSource(final SourceDiscoverSchemaRequestBody sourceDiscoverSchemaRequestBody) {
    return execute(() -> schedulerHandler.discoverSchemaForSourceFromSourceId(sourceDiscoverSchemaRequestBody));
  }

  @Override
  public CheckConnectionRead executeDestinationCheckConnection(final DestinationCoreConfig destinationCoreConfig) {
    return execute(() -> schedulerHandler.checkDestinationConnectionFromDestinationCreate(destinationCoreConfig));
  }

  @Override
  public DbMigrationExecutionRead executeMigrations(final DbMigrationRequestBody dbMigrationRequestBody) {
    return execute(() -> dbMigrationHandler.migrate(dbMigrationRequestBody));
  }

  @Override
  public CheckConnectionRead executeSourceCheckConnection(final SourceCoreConfig sourceCoreConfig) {
    return execute(() -> schedulerHandler.checkSourceConnectionFromSourceCreate(sourceCoreConfig));
  }

  @Override
  public SourceDiscoverSchemaRead executeSourceDiscoverSchema(final SourceCoreConfig sourceCoreConfig) {
    return execute(() -> schedulerHandler.discoverSchemaForSourceFromSourceCreate(sourceCoreConfig));
  }

  @Override
  public File exportArchive() {
    return execute(() -> archiveHandler.exportData());
  }

  @Override
  public File exportWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> archiveHandler.exportWorkspace(workspaceIdRequestBody));
  }

  @Override
  public ConnectionRead getConnection(final ConnectionIdRequestBody connectionIdRequestBody) {
    return execute(() -> connectionsHandler.getConnection(connectionIdRequestBody.getConnectionId()));
  }

  @Override
  public DestinationRead getDestination(final DestinationIdRequestBody destinationIdRequestBody) {
    return execute(() -> destinationHandler.getDestination(destinationIdRequestBody));
  }

  @Override
  public DestinationDefinitionRead getDestinationDefinition(final DestinationDefinitionIdRequestBody destinationDefinitionIdRequestBody) {
    return execute(() -> destinationDefinitionsHandler.getDestinationDefinition(destinationDefinitionIdRequestBody));
  }

  @Override
  public DestinationDefinitionRead getDestinationDefinitionForWorkspace(
                                                                        final DestinationDefinitionIdWithWorkspaceId destinationDefinitionIdWithWorkspaceId) {
    return execute(() -> destinationDefinitionsHandler.getDestinationDefinitionForWorkspace(destinationDefinitionIdWithWorkspaceId));
  }

  @Override
  public DestinationDefinitionSpecificationRead getDestinationDefinitionSpecification(
                                                                                      final DestinationDefinitionIdRequestBody destinationDefinitionIdRequestBody) {
    return execute(() -> schedulerHandler.getDestinationSpecification(destinationDefinitionIdRequestBody));
  }

  @Override
  public OAuthConsentRead getDestinationOAuthConsent(final DestinationOauthConsentRequest destinationOauthConsentRequest) {
    return execute(() -> oAuthHandler.getDestinationOAuthConsent(destinationOauthConsentRequest));
  }

  @Override
  public HealthCheckRead getHealthCheck() {
    return execute(() -> healthCheckHandler.health());
  }

  @Override
  public JobDebugInfoRead getJobDebugInfo(final JobIdRequestBody jobIdRequestBody) {
    return execute(() -> jobHistoryHandler.getJobDebugInfo(jobIdRequestBody));
  }

  @Override
  public JobInfoRead getJobInfo(final JobIdRequestBody jobIdRequestBody) {
    return execute(() -> jobHistoryHandler.getJobInfo(jobIdRequestBody));
  }

  @Override
  public File getLogs(final LogsRequestBody logsRequestBody) {
    return execute(() -> logsHandler.getLogs(Path.of(workspaceRoot), workerEnvironment, logConfigs, logsRequestBody));
  }

  @Override
  public File getOpenApiSpec() {
    return execute(() -> openApiConfigHandler.getFile());
  }

  @Override
  public OperationRead getOperation(final OperationIdRequestBody operationIdRequestBody) {
    return execute(() -> operationsHandler.getOperation(operationIdRequestBody));
  }

  @Override
  public SourceRead getSource(final SourceIdRequestBody sourceIdRequestBody) {
    return execute(() -> sourceHandler.getSource(sourceIdRequestBody));
  }

  @Override
  public SourceDefinitionRead getSourceDefinition(final SourceDefinitionIdRequestBody sourceDefinitionIdRequestBody) {
    return execute(() -> sourceDefinitionsHandler.getSourceDefinition(sourceDefinitionIdRequestBody));
  }

  @Override
  public SourceDefinitionRead getSourceDefinitionForWorkspace(final SourceDefinitionIdWithWorkspaceId sourceDefinitionIdWithWorkspaceId) {
    return execute(() -> sourceDefinitionsHandler.getSourceDefinitionForWorkspace(sourceDefinitionIdWithWorkspaceId));
  }

  @Override
  public SourceDefinitionSpecificationRead getSourceDefinitionSpecification(final SourceDefinitionIdRequestBody sourceDefinitionIdRequestBody) {
    return execute(() -> schedulerHandler.getSourceDefinitionSpecification(sourceDefinitionIdRequestBody));
  }

  @Override
  public OAuthConsentRead getSourceOAuthConsent(final SourceOauthConsentRequest sourceOauthConsentRequest) {
    return execute(() -> oAuthHandler.getSourceOAuthConsent(sourceOauthConsentRequest));
  }

  @Override
  public ConnectionState getState(final ConnectionIdRequestBody connectionIdRequestBody) {
    return execute(() -> schedulerHandler.getState(connectionIdRequestBody));
  }

  @Override
  public WorkspaceRead getWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> workspacesHandler.getWorkspace(workspaceIdRequestBody));
  }

  @Override
  public WorkspaceRead getWorkspaceBySlug(final SlugRequestBody slugRequestBody) {
    return execute(() -> workspacesHandler.getWorkspaceBySlug(slugRequestBody));
  }

  @Override
  public PrivateDestinationDefinitionRead grantDestinationDefinitionToWorkspace(
                                                                                final DestinationDefinitionIdWithWorkspaceId destinationDefinitionIdWithWorkspaceId) {
    return execute(() -> destinationDefinitionsHandler.grantDestinationDefinitionToWorkspace(destinationDefinitionIdWithWorkspaceId));
  }

  @Override
  public PrivateSourceDefinitionRead grantSourceDefinitionToWorkspace(final SourceDefinitionIdWithWorkspaceId sourceDefinitionIdWithWorkspaceId) {
    return execute(() -> sourceDefinitionsHandler.grantSourceDefinitionToWorkspace(sourceDefinitionIdWithWorkspaceId));
  }

  @Override
  public ImportRead importArchive(final File body) {
    return execute(() -> archiveHandler.importData(body));
  }

  @Override
  public ImportRead importIntoWorkspace(final ImportRequestBody importRequestBody) {
    return execute(() -> archiveHandler.importIntoWorkspace(importRequestBody));
  }

  @Override
  public ConnectionReadList listAllConnectionsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> connectionsHandler.listAllConnectionsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public ConnectionReadList listConnectionsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> connectionsHandler.listConnectionsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public DestinationDefinitionReadList listDestinationDefinitions() {
    return execute(() -> destinationDefinitionsHandler.listDestinationDefinitions());
  }

  @Override
  public DestinationDefinitionReadList listDestinationDefinitionsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> destinationDefinitionsHandler.listDestinationDefinitionsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public DestinationReadList listDestinationsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> destinationHandler.listDestinationsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public JobReadList listJobsFor(final JobListRequestBody jobListRequestBody) {
    return execute(() -> jobHistoryHandler.listJobsFor(jobListRequestBody));
  }

  @Override
  public DestinationDefinitionReadList listLatestDestinationDefinitions() {
    return execute(() -> destinationDefinitionsHandler.listLatestDestinationDefinitions());
  }

  @Override
  public SourceDefinitionReadList listLatestSourceDefinitions() {
    return execute(() -> sourceDefinitionsHandler.listLatestSourceDefinitions());
  }

  @Override
  public DbMigrationReadList listMigrations(final DbMigrationRequestBody dbMigrationRequestBody) {
    return execute(() -> dbMigrationHandler.list(dbMigrationRequestBody));
  }

  @Override
  public OperationReadList listOperationsForConnection(final ConnectionIdRequestBody connectionIdRequestBody) {
    return execute(() -> operationsHandler.listOperationsForConnection(connectionIdRequestBody));
  }

  @Override
  public PrivateDestinationDefinitionReadList listPrivateDestinationDefinitions(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> destinationDefinitionsHandler.listPrivateDestinationDefinitions(workspaceIdRequestBody));
  }

  @Override
  public PrivateSourceDefinitionReadList listPrivateSourceDefinitions(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> sourceDefinitionsHandler.listPrivateSourceDefinitions(workspaceIdRequestBody));
  }

  @Override
  public SourceDefinitionReadList listSourceDefinitions() {
    return execute(() -> sourceDefinitionsHandler.listSourceDefinitions());
  }

  @Override
  public SourceDefinitionReadList listSourceDefinitionsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> sourceDefinitionsHandler.listSourceDefinitionsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public SourceReadList listSourcesForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> sourceHandler.listSourcesForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public WorkspaceReadList listWorkspaces() {
//    return execute(() -> workspacesHandler.listWorkspaces());
    return execute(() -> {
      final Iterable<Workspace> workspaces = workspaceRepository.findAll();
      return new WorkspaceReadList().workspaces(StreamSupport.stream(workspaces.spliterator(), false).map(w -> new WorkspaceRead()
          .workspaceId(w.getWorkspaceId())
          .anonymousDataCollection(w.isAnonymousDataCollection())
          .customerId(w.getCustomerId())
          .displaySetupWizard(w.isDisplaySetupWizard())
          .email(w.getEmail())
          .feedbackDone(w.isFeedbackComplete())
          .firstCompletedSync(w.isFirstSyncComplete())
          .initialSetupComplete(w.isInitialSetupComplete())
          .name(w.getName())
          .news(w.isSendNewsletter())
          .notifications(w.getNotifications())
          .securityUpdates(w.isSendSecurityUpdates())
          .slug(w.getSlug())).collect(Collectors.toList()));
    });
  }

  @Override
  public JobInfoRead resetConnection(final ConnectionIdRequestBody connectionIdRequestBody) {
    return execute(() -> schedulerHandler.resetConnection(connectionIdRequestBody));
  }

  @Override
  public void revokeDestinationDefinitionFromWorkspace(final DestinationDefinitionIdWithWorkspaceId destinationDefinitionIdWithWorkspaceId) {
    execute(() -> {
      destinationDefinitionsHandler.revokeDestinationDefinitionFromWorkspace(destinationDefinitionIdWithWorkspaceId);
      return null;
    });
  }

  @Override
  public void revokeSourceDefinitionFromWorkspace(final SourceDefinitionIdWithWorkspaceId sourceDefinitionIdWithWorkspaceId) {
    execute(() -> {
      sourceDefinitionsHandler.revokeSourceDefinitionFromWorkspace(sourceDefinitionIdWithWorkspaceId);
      return null;
    });
  }

  @Override
  public ConnectionReadList searchConnections(final ConnectionSearch connectionSearch) {
    return execute(() -> connectionsHandler.searchConnections(connectionSearch));
  }

  @Override
  public DestinationReadList searchDestinations(final DestinationSearch destinationSearch) {
    return execute(() -> destinationHandler.searchDestinations(destinationSearch));
  }

  @Override
  public SourceReadList searchSources(final SourceSearch sourceSearch) {
    return execute(() -> sourceHandler.searchSources(sourceSearch));
  }

  @Override
  public void setInstancewideDestinationOauthParams(
                                                    final SetInstancewideDestinationOauthParamsRequestBody setInstancewideDestinationOauthParamsRequestBody) {
    execute(() -> {
      oAuthHandler.setDestinationInstancewideOauthParams(setInstancewideDestinationOauthParamsRequestBody);
      return null;
    });
  }

  @Override
  public void setInstancewideSourceOauthParams(final SetInstancewideSourceOauthParamsRequestBody setInstancewideSourceOauthParamsRequestBody) {
    execute(() -> {
      oAuthHandler.setSourceInstancewideOauthParams(setInstancewideSourceOauthParamsRequestBody);
      return null;
    });
  }

  @Override
  public JobInfoRead syncConnection(final ConnectionIdRequestBody connectionIdRequestBody) {
    return execute(() -> schedulerHandler.syncConnection(connectionIdRequestBody));
  }

  @Override
  public NotificationRead tryNotificationConfig(final Notification notification) {
    return execute(() -> workspacesHandler.tryNotification(notification));
  }

  @Override
  public ConnectionRead updateConnection(final ConnectionUpdate connectionUpdate) {
    return execute(() -> connectionsHandler.updateConnection(connectionUpdate));
  }

  @Override
  public DestinationDefinitionRead updateCustomDestinationDefinition(final CustomDestinationDefinitionUpdate customDestinationDefinitionUpdate) {
    return execute(() -> destinationDefinitionsHandler.updateCustomDestinationDefinition(customDestinationDefinitionUpdate));
  }

  @Override
  public SourceDefinitionRead updateCustomSourceDefinition(final CustomSourceDefinitionUpdate customSourceDefinitionUpdate) {
    return execute(() -> sourceDefinitionsHandler.updateCustomSourceDefinition(customSourceDefinitionUpdate));
  }

  @Override
  public DestinationRead updateDestination(final DestinationUpdate destinationUpdate) {
    return null;
  }

  @Override
  public DestinationDefinitionRead updateDestinationDefinition(final DestinationDefinitionUpdate destinationDefinitionUpdate) {
    return execute(() -> destinationDefinitionsHandler.updateDestinationDefinition(destinationDefinitionUpdate));
  }

  @Override
  public OperationRead updateOperation(final OperationUpdate operationUpdate) {
    return execute(() -> operationsHandler.updateOperation(operationUpdate));
  }

  @Override
  public SourceRead updateSource(final SourceUpdate sourceUpdate) {
    return execute(() -> sourceHandler.updateSource(sourceUpdate));
  }

  @Override
  public SourceDefinitionRead updateSourceDefinition(final SourceDefinitionUpdate sourceDefinitionUpdate) {
    return execute(() -> sourceDefinitionsHandler.updateSourceDefinition(sourceDefinitionUpdate));
  }

  @Override
  public WorkspaceRead updateWorkspace(final WorkspaceUpdate workspaceUpdate) {
    return execute(() -> workspacesHandler.updateWorkspace(workspaceUpdate));
  }

  @Override
  public void updateWorkspaceFeedback(final WorkspaceGiveFeedback workspaceGiveFeedback) {
    execute(() -> {
      workspacesHandler.setFeedbackDone(workspaceGiveFeedback);
      return null;
    });
  }

  @Override
  public WorkspaceRead updateWorkspaceName(final WorkspaceUpdateName workspaceUpdateName) {
    return execute(() -> workspacesHandler.updateWorkspaceName(workspaceUpdateName));
  }

  @Override
  public UploadRead uploadArchiveResource(final File body) {
    return execute(() -> archiveHandler.uploadArchiveResource(body));
  }

  @Override
  public WebBackendConnectionRead webBackendCreateConnection(final WebBackendConnectionCreate webBackendConnectionCreate) {
    return execute(() -> webBackendConnectionsHandler.webBackendCreateConnection(webBackendConnectionCreate));
  }

  @Override
  public WebBackendConnectionRead webBackendGetConnection(final WebBackendConnectionRequestBody webBackendConnectionRequestBody) {
    return execute(() -> webBackendConnectionsHandler.webBackendGetConnection(webBackendConnectionRequestBody));
  }

  @Override
  public WebBackendConnectionReadList webBackendListAllConnectionsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> webBackendConnectionsHandler.webBackendListAllConnectionsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public WebBackendConnectionReadList webBackendListConnectionsForWorkspace(final WorkspaceIdRequestBody workspaceIdRequestBody) {
    return execute(() -> webBackendConnectionsHandler.webBackendListConnectionsForWorkspace(workspaceIdRequestBody));
  }

  @Override
  public WebBackendConnectionReadList webBackendSearchConnections(final WebBackendConnectionSearch webBackendConnectionSearch) {
    return execute(() -> webBackendConnectionsHandler.webBackendSearchConnections(webBackendConnectionSearch));
  }

  @Override
  public WebBackendConnectionRead webBackendUpdateConnection(final WebBackendConnectionUpdate webBackendConnectionUpdate) {
    return execute(() -> webBackendConnectionsHandler.webBackendUpdateConnection(webBackendConnectionUpdate));
  }

  private <T> T execute(final HandlerCall<T> call) {
    try {
      return call.call();
    } catch (final ConfigNotFoundException e) {
      throw new IdNotFoundKnownException(String.format("Could not find configuration for %s: %s.", e.getType().toString(), e.getConfigId()),
          e.getConfigId(), e);
    } catch (final JsonValidationException e) {
      throw new BadObjectSchemaKnownException(
          String.format("The provided configuration does not fulfill the specification. Errors: %s", e.getMessage()), e);
    } catch (final IOException e) {
      throw new RuntimeException(e);
    }
  }

  private interface HandlerCall<T> {

    T call() throws ConfigNotFoundException, IOException, JsonValidationException;

  }

}