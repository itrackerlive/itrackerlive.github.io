'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">issue-tracker-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' : 'data-target="#xs-components-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' :
                                            'id="xs-components-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactUsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IssueComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IssueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IssueFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IssueFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IssuesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IssuesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatisticsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' : 'data-target="#xs-injectables-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' :
                                        'id="xs-injectables-links-module-AppModule-28213bc7422dba4f65ba943bf2309659"' }>
                                        <li class="link">
                                            <a href="injectables/SocketService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SocketService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' : 'data-target="#xs-components-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' :
                                            'id="xs-components-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' : 'data-target="#xs-injectables-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' :
                                        'id="xs-injectables-links-module-AuthModule-c1b523b217cdaf735dc96f931d9aaff1"' }>
                                        <li class="link">
                                            <a href="injectables/AnimateTextService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnimateTextService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnimateTextService.html" data-type="entity-link">AnimateTextService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppHttpService.html" data-type="entity-link">AppHttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocketService.html" data-type="entity-link">SocketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionService.html" data-type="entity-link">SubscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilService.html" data-type="entity-link">UtilService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthInfo.html" data-type="entity-link">AuthInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AutoCompleteTag.html" data-type="entity-link">AutoCompleteTag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommentsResponse.html" data-type="entity-link">CommentsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContribProjects.html" data-type="entity-link">ContribProjects</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feedback.html" data-type="entity-link">Feedback</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilteredIssuesResponse.html" data-type="entity-link">FilteredIssuesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Issue.html" data-type="entity-link">Issue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IssueDetailsResponse.html" data-type="entity-link">IssueDetailsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IssueStatsResponse.html" data-type="entity-link">IssueStatsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginResponse.html" data-type="entity-link">LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link">Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project.html" data-type="entity-link">Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectResponse.html" data-type="entity-link">ProjectResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectsResponse.html" data-type="entity-link">ProjectsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link">Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpResponse.html" data-type="entity-link">SignUpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SimpleUser.html" data-type="entity-link">SimpleUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsersResponse.html" data-type="entity-link">UsersResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});