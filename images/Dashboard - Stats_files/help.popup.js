(function($, global) {
    $(function() {
        $.extend({
            dHelpPopup: (function() {
                var host = commonProps['duda.support.portal.host'] + '/hc/';
                var apiHost =
                    'https://' + commonProps['duda.support.portal.host'];
                var availableLocales = commonProps[
                    'direct.support.portal.locales'
                ].split(',') || ['en'];
                var zendeskLocaleMapping = {
                    es: 'es-419',
                    es_ar: 'es-419',
                    pt: 'pt-br',
                    en_gb: 'en-gb',
                    fr: 'fr-fr'
                };
                var zendeskWLMapping = {
                    fr: 'fr-fr',
                    es: 'es-419',
                    es_ar: 'es-419',
                    pt: 'pt-br',
                    en_gb: 'en-gb'
                }; // WL get same article in FR but different URL param

                var accountPermissions;
                var accountLocaleCode;
                var accountLocaleId;

                if (window.hallDashboardData) {
                    accountPermissions =
                        window.hallDashboardData.account.permissions;
                    accountLocaleCode =
                        window.hallDashboardData.account.localeCode;
                    accountLocaleId = window.hallDashboardData.account.localeId;
                } else {
                    accountPermissions = window.uiPerms;
                    accountLocaleCode = window.dm_account_codeLocale;
                    accountLocaleId = window.dm_account_locale;
                }

                if (
                    commonProps['should.enable.mindtouch.for.WL'] &&
                    !accountPermissions.D_AWARE
                ) {
                    host =
                        commonProps['white.label.support.portal.host'] + '/hc/';
                    apiHost =
                        'https://' +
                        commonProps['white.label.support.portal.host'];
                    availableLocales = commonProps[
                        'white.label.support.portal.locales'
                    ].split(',');
                }
                var selectors = {
                    '#topHelp': {
                        cid: 'd1_show_hidden_elements'
                    },
                    '#dmMtUrlRedirect': {
                        cid: 'd1_url_redirect'
                    },
                    '#dmMtEditorOverview': {
                        cid: 'dm_editor_overview'
                    },
                    '#dmMtCustomizeBackground': {
                        cid: 'dm_customize_background'
                    },
                    '#dmMtHeaderPage': {
                        cid: 'dm_header'
                    },
                    '#dmMtPageInfo': {
                        cid: 'dm_page_info'
                    },
                    '#dmMtEditPageLink': {
                        cid: 'dm_edit_page_link'
                    },
                    '#dmMtBlogSection': {
                        cid: 'd1_blog'
                    },
                    '#dmMtPageSettingsGeneral': {
                        cid: 'dm_page_settings_general'
                    },
                    '#dmMtPageSettingsSeo': {
                        cid: 'dm_page_settings_seo',
                        onecid: 'd1_seo'
                    },
                    '#dmMtPageSettingsTemplates': {
                        cid: 'dm_page_settings_templates'
                    },
                    '#dmMtPageSettingsHeadSection': {
                        cid: 'dm_page_settings_head_section',
                        onecid: 'd1_head_section'
                    },
                    '#dmMtSiteSettingsGeneral': {
                        cid: 'dm_manage_site_settings_general',
                        onecid: 'd1_general_site_settings'
                    },
                    '#dmMtSiteSettingsSeo': {
                        cid: 'dm_manage_site_settings_seo'
                    },
                    '#dmMtSiteSettingsAdvanced': {
                        cid: 'dm_manage_site_settings_advanced'
                    },
                    '#dmMtRecommendedPages': {
                        cid: 'dm_recommended_pages'
                    },
                    '#dmMtManagePages': {
                        cid: 'dm_manage_pages'
                    },
                    '#dmMtPageSettings': {
                        cid: 'dm_page_settings'
                    },
                    '#dmMtSiteUrl': {
                        cid: 'dm_site_url'
                    },
                    '#analyticsAndTracking': {
                        cid: 'dm_analytics_and_tracking'
                    },
                    '#dmMtSiteSettings': {
                        cid: 'dm_site_settings'
                    },
                    '#dmMtSiteSettingsCssHtmlGlobalCss': {
                        cid: 'dm_global_css',
                        onecid: 'd1_general_css'
                    },
                    '#dmMtSiteSettingsCssHtmlPageCss': {
                        cid: 'dm_page_css'
                    },
                    '#dmMtSiteSettingsCssHtmlPageHtml': {
                        cid: 'dm_page_html'
                    },
                    '#dmMtAccountSettingsGeneral': {
                        cid: 'dm_account_settings'
                    },
                    '#dmMtAccountSettingsDomain': {
                        cid: 'dm_domains'
                    },
                    '#dmMtAccountSettingsCustomBrand': {
                        cid: 'dm_dudadesign_custom_branding'
                    },
                    '#dmMtAccountSettingsCommunication': {
                        cid: 'dm_communications'
                    },
                    '#dmMtDashboardDeleteSite': {
                        cid: 'dm_delete_site'
                    },
                    '#dmMtMobileMap': {
                        cid: 'dm_mobile_map'
                    },
                    '#dmMtMap': {
                        cid: 'dm_map'
                    },
                    '#dmMtAdsense': {
                        cid: 'dm_adsense'
                    },
                    '#dmMtContactForm': {
                        cid: 'dm_contact_form'
                    },
                    '#dmMtRestMenu': {
                        cid: 'dm_restaurant_menu'
                    },
                    '#dmMtReviews': {
                        cid: 'dm_reviews'
                    },
                    '#dmMtYouTubeChannel': {
                        cid: 'dm_youtube_channel'
                    },
                    '#dmMtMultiLocation': {
                        cid: 'dm_multi_location'
                    },
                    '#dmMtList': {
                        cid: 'dm_list'
                    },
                    '#dmMtSendInfo': {
                        cid: 'dm_send_info'
                    },
                    '#dmMtButton': {
                        cid: 'dm_button'
                    },
                    '#dmMtVideo': {
                        cid: 'dm_video'
                    },
                    '#dmMtNavigation': {
                        cid: 'dm_navigation'
                    },
                    '#dmMtMobileExpandableNavigation': {
                        cid: 'd1_desktop_top_navigation'
                    },
                    '#dmMtTabletTopNavigation': {
                        cid: 'd1_desktop_top_navigation'
                    },
                    '#dmMtDesktopTopNavigation': {
                        cid: 'd1_desktop_top_navigation'
                    },
                    '#dmMtHtml': {
                        cid: 'dm_html'
                    },
                    '#dmMtRssFeed': {
                        cid: 'dm_rss_feed'
                    },
                    '#dmMtYouTubeVideo': {
                        cid: 'dm_youtube_video',
                        onecid: 'd1_youtube'
                    },
                    '#dmMtClickToCall': {
                        cid: 'dm_click_to_call'
                    },
                    '#chooseAndPlaceImages': {
                        cid: 'dm_choose_and_place_images'
                    },
                    '#dmMtImage': {
                        cid: 'dm_image'
                    },
                    '#dmMtImageSlider': {
                        cid: 'dm_image_slider'
                    },
                    '#dmMtPhotoGallery': {
                        cid: 'dm_photo_gallery'
                    },
                    '#dmMtParagraph': {
                        cid: 'dm_paragraph'
                    },
                    '#dmMtFacebookAlbums': {
                        cid: 'dm_facebook_albums'
                    },
                    '#dmMtOpenTable': {
                        cid: 'dm_opentable',
                        onecid: 'd1_open_table'
                    },
                    '#dmMtBusinessHours': {
                        cid: 'dm_business_hours'
                    },
                    '#dmMtNotifs': {
                        cid: 'dm_push',
                        onecid: 'd1_push'
                    },
                    '#dmMtClickToEmail': {
                        cid: 'dm_click_to_email'
                    },
                    '#dmMtClickToText': {
                        cid: 'dm_click_to_text'
                    },
                    '#dmMtPayPal': {
                        cid: 'dm_paypal'
                    },
                    '#dmMtConstantContact': {
                        cid: 'dm_constant_contact'
                    },
                    '#dmMtTabs': {
                        cid: 'dm_tabs'
                    },
                    '#dmMtSpacer': {
                        cid: 'dm_spacer'
                    },
                    '#dmMtSocialIcons': {
                        cid: 'dm_social_icons'
                    },
                    '#dmMtShare': {
                        cid: 'dm_share'
                    },
                    '#dmMtTwitterFeed': {
                        cid: 'dm_twitter_feed'
                    },
                    '#dmMtFacebookLike': {
                        cid: 'dm_facebook_like_button',
                        onecid: 'd1_facebook_like'
                    },
                    '#dmMtFacebookComments': {
                        cid: 'dm_facebook_comments'
                    },
                    '#dmMtBackups': {
                        cid: 'dm_backup',
                        onecid: 'd1_backup_site'
                    },
                    '#dmMtDesignLayoutPage': {
                        cid: 'dm_button_layouts'
                    },
                    '#dmMtChooseLayout': {
                        cid: 'dm_choose_layout'
                    },
                    '#dmMtDesignStylePage': {
                        cid: 'dm_color_style'
                    },
                    '#dmMtCustomizeColorPalette': {
                        cid: 'dm_customize_color_palette'
                    },
                    '#dmMtDesignStyleTextStyleEditor': {
                        cid: 'dm_text_style'
                    },
                    '#dmMtHeaderBackgroundImage': {
                        cid: 'dm_customize_background'
                    },
                    '#dmMtAddPageEditor': {
                        cid: 'dm_add_a_page',
                        onecid: 'd1_add_page'
                    },
                    '#dmMtGoLivePreviewSite': {
                        cid: 'dm_preview_your_mobile_site'
                    },
                    '#dmMtDashboardCreateSite': {
                        cid: 'dm_create_new_site'
                    },
                    '#dmMtDesign': {
                        cid: 'dm_design'
                    },
                    '#dmMtDashboard': {
                        cid: 'dm_my_sites'
                    },
                    '#dmMtStats': {
                        cid: 'dm_stats'
                    },
                    '#dmMtManageSitePaymentInfo': {
                        cid: 'dm_payment_info'
                    },
                    '#dmChangeSitePaymentInfo': {
                        cid: 'd1_update_billing'
                    },
                    '#dmMtManageSiteUsers': {
                        cid: 'd1_users'
                    },
                    '#dmMtHome': {
                        cid: 'dm_home'
                    },
                    '#dmMtHtmlHelp': {
                        cid: 'dm_dmle',
                        onecid: 'd1_html_css_editor'
                    },
                    '#dmMtTextEditorCustomCode': {
                        cid: 'new_text_editor'
                    },
                    '#dmMtAccountPayments': {
                        cid: 'dm_payment_table'
                    },
                    '#dmMtTwoColumns': {
                        cid: 'dm_2_columns'
                    },
                    '#dmMtCoupon': {
                        cid: 'dm_coupon'
                    },
                    '#dmMtaddElement': {
                        cid: 'dm_add_element'
                    },
                    '#dmMtConnectDomain': {
                        cid: 'd1_direct_domain'
                    },
                    '#dmMtDefaultDomain': {
                        cid: 'd1_default_domain'
                    },
                    '#dmMtCustomDomain': {
                        cid: 'd1_custom_domain'
                    },
                    '#dmMtCustomDomain2': {
                        cid: 'd1_custom_domain'
                    },
                    '#dmMtPurchaseDomain': {
                        cid: 'd1_purchase_new_domain'
                    },
                    '#dmMtDashboardCustomDomain': {
                        cid: 'dm_dashboard_domain'
                    },
                    '#dmMtPreviewCustomDomain': {
                        cid: 'dm_preview_page_domain'
                    },
                    '#dmMtOneCustomDomain': {
                        cid: 'd1_dudaone_site_domain'
                    },
                    '#dmMtMobileCustomDomain': {
                        cid: 'dm_dudamobile_site_domain'
                    },
                    '#dmMtAccountSettingsApiAccess': {
                        cid: 'dm_api_access'
                    },
                    '#dmD1Design': {
                        cid: 'd1_design'
                    },
                    '#dmMtDesignTips': {
                        cid: 'd1_design_tips'
                    },
                    '#dmMtDashboardDuplicateSite': {
                        cid: 'dm_duplicate_site'
                    },
                    '#dmMtExternallApp': {
                        cid: 'dm_online_scheduling',
                        onecid: 'dm_online_scheduling '
                    },
                    '#dmMtChooseRule': {
                        cid: 'd1_choose_insite_rule'
                    },
                    '#dmMtRuleTrigger': {
                        cid: 'd1_define_insite_rule'
                    },
                    '#dmMtRuleTriggerUrl': {
                        cid: 'd1_inSite_url'
                    },
                    '#dmMtRuleAction': {
                        cid: 'd1_choose_insite_action'
                    },
                    '#dmMtRuleBackground': {
                        cid: 'd1_choose_insite_background'
                    },
                    '#dmMtActivateRule': {
                        cid: 'd1_activate_insite_rule'
                    },
                    '#dmMtRuleChangeBgAction': {
                        cid: 'd1_choose_insite_background'
                    },
                    '#dmMtRuleSpecialEffectAction': {
                        cid: 'd1_insite_special_fx'
                    },
                    '#dmMtBuildInsite': {
                        cid: 'd1_build_insite'
                    },
                    '#dmMtInSitePanel': {
                        cid: 'd1_add_insite'
                    },
                    '#dmMtInSiteTrial': {
                        cid: 'd1_insite_free_trial'
                    },
                    '#dmMtDeveloperMode': {
                        cid: 'd1_html_css_editor'
                    },
                    '.dmMtDashboardStatsOverview': {
                        cid: 'd1_stats'
                    },
                    '#dmMtContentLibrary': {
                        cid: 'd1_content_library'
                    },
                    '#dmMtBizInfo': {
                        cid: 'd1_content_library'
                    },
                    '#dmMtStorePanel': {
                        cid: 'd1_ecom_getting_started'
                    },
                    '#dmMtStoreStart': {
                        cid: 'd1_ecom_getting_started'
                    },
                    '#dmMtStorePaid': {
                        cid: 'd1_ecom_payments'
                    },
                    '#dmMtStoreProducts': {
                        cid: 'd1_ecom_edit_products'
                    },
                    '#dmMtStoreShipping': {
                        cid: 'd1_ecom_shipping'
                    },
                    '#dmMtStoreDesign': {
                        cid: 'd1_ecom_design'
                    },
                    '#dmMtStoreOrders': {
                        cid: 'd1_ecom_orders'
                    },
                    '#uploadFiles': {
                        cid: 'd1_upload_file'
                    },
                    '#dmMtAnchors': {
                        cid: 'd1_anchor_links'
                    },
                    '.dmMtPermissionsStaffList': {
                        cid: 'd1_manage_staff'
                    },
                    '.dmMtPermissionsCustomersList': {
                        cid: 'd1_manage_customers'
                    },
                    '.dmMtPermissionsAddStaff': {
                        cid: 'd1_staff_permissions'
                    },
                    '.dmMtPermissionsAddCustomer': {
                        cid: 'd1_customer_permissions'
                    },
                    '.dmMtPermissionsAddCustomGroup': {
                        cid: 'd1_custom_group'
                    },
                    '.dmMtPermissions': {
                        cid: 'd1_users_and_permissions'
                    },
                    '#dmMtExpFeature': {
                        cid: 'd1_experimental_features'
                    },
                    '#dmMtPopup': {
                        cid: 'd1_new_popup'
                    }
                };

                var handler = function(selectors, authToken) {
                    $(document).on(
                        'click.mtF1',
                        Object.keys(selectors).join(', '),
                        function(event) {
                            event.stopPropagation();
                            var $el = $(this);
                            var currentSelector = Object.keys(selectors).find(
                                function(selector) {
                                    return $el.is(selector);
                                }
                            );
                            if (
                                !currentSelector ||
                                !selectors[currentSelector]
                            ) {
                                return;
                            }
                            var data = selectors[currentSelector];
                            $.dHelpPopup.load(
                                data.onecid || data.cid.replace('dm_', 'd1_')
                            );
                        }
                    );

                    var supportLink = $('#supportLink');
                    if (supportLink.length > 0) {
                        supportLink
                            .find('a')
                            .attr(
                                'href',
                                'https://' +
                                    host +
                                    $.dHelpPopup.getArticleLocale()
                            );
                        supportLink.find('a').attr('target', '_blank');
                    }
                };

                return {
                    init: function() {
                        if (!$.dHelpPopup.shouldHideHelp()) {
                            handler(selectors);
                        } else {
                            $('body').addClass('hideMT');
                        }
                    },

                    shouldHideHelp: function() {
                        if (!accountPermissions.SHOW_HELP) return true;

                        if (
                            accountLocaleId &&
                            dmStr['ui.config.hideMT'] == 'true'
                        ) {
                            return true;
                        }

                        if (
                            global.dm_current_editor !== 'ONE' &&
                            global.dm_current_editor !== 'PT'
                        ) {
                            return true;
                        }

                        return false;
                    },
                    getArticleLocale: function() {
                        if (
                            accountLocaleCode === 'en' ||
                            availableLocales.indexOf(accountLocaleCode) == -1
                        ) {
                            return 'en-us';
                        }
                        var mappingLocale = accountPermissions.D_AWARE
                            ? zendeskLocaleMapping[accountLocaleCode]
                            : zendeskWLMapping[accountLocaleCode];
                        return mappingLocale || accountLocaleCode;
                    },
                    showHelp: function(elem) {
                        if (!$('body').hasClass('hideMT')) {
                            elem.show();
                        }
                    },
                    load: function(cid) {
                        var helpPopup = $('#helpPopup');
                        if (helpPopup.length) {
                            $.dHelpPopup.open(cid);
                        } else {
                            helpPopup = $('<div></div>');
                            helpPopup.attr('id', 'helpPopup');
                            helpPopup.attr('dir', $('body').attr('dir'));
                            $('body').append(helpPopup);
                            $.get('/editor/help/help.popup.hbs.jsp', function(
                                data
                            ) {
                                helpPopup.append(data);
                                // bind the event handler of the close button
                                helpPopup
                                    .find('.xButton')
                                    .off('click.close')
                                    .on('click.close', function() {
                                        helpPopup.hide();
                                    });
                                // add resizable and draggable to the help popup

                                if (!window.isTouchDevice) {
                                    var containment = $('body');
                                    helpPopup.draggable({
                                        handle: helpPopup.find('#header'),
                                        iframeFix: true,
                                        containment: containment
                                    });
                                    var iframeFixCss = {
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        opacity: '0.001',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1000
                                    };

                                    helpPopup.resizable({
                                        minHeight: 200,
                                        maxHeight: 1000,
                                        containment: containment,
                                        start: function(event, ui) {
                                            // set transparent overlay to prevent from events go to iframe.
                                            // $('iframe').css('pointer-events','none');
                                            $(
                                                '<div class="ui-resizable-iframeFix" style="background: #fff;"></div>'
                                            )
                                                .css(iframeFixCss)
                                                .appendTo('body');
                                        },
                                        stop: function(event, ui) {
                                            // remove iframe-fix overay.
                                            $(
                                                '.ui-resizable-iframeFix'
                                            ).remove();
                                        },
                                        resize: function(event, ui) {
                                            helpPopup
                                                .find('#scrollable')
                                                .css(
                                                    'max-height',
                                                    helpPopup.outerHeight() -
                                                        90 +
                                                        'px'
                                                );
                                        }
                                    });
                                }
                                $.dHelpPopup.open(cid);
                            });
                        }
                    },

                    getSupportPortalUrl: function() {
                        return (
                            'https://' + host + $.dHelpPopup.getArticleLocale()
                        );
                    },

                    open: function(cid) {
                        var helpPopup = $('#helpPopup');
                        helpPopup.find('#content').empty();
                        helpPopup.find('#title').empty();
                        helpPopup.show();
                        // call zendesk API to get the articles based on the cid (label)
                        $.get(
                            apiHost +
                                '/api/v2/help_center/articles/search.json?label_names=' +
                                cid,
                            function(data) {
                                if (data.results.length == 0) {
                                    console.log(
                                        "Can't find help article with label: " +
                                            cid
                                    );
                                    helpPopup
                                        .find('#title')
                                        .html("Can't find article: " + cid);
                                    return;
                                }
                                var articleId = data.results[0].id;
                                // call zendesk API to get the content of the requested article
                                $.get(
                                    apiHost +
                                        '/api/v2/help_center/' +
                                        $.dHelpPopup.getArticleLocale() +
                                        '/articles/' +
                                        articleId +
                                        '.json',
                                    function(article) {
                                        helpPopup
                                            .find('#title')
                                            .html(article.article.title);
                                        helpPopup
                                            .find('#content')
                                            .html(article.article.body);
                                        helpPopup
                                            .find('#content a')
                                            .each(function(index, obj) {
                                                // fix relative links
                                                $(this).attr(
                                                    'target',
                                                    '_blank'
                                                );
                                                if (
                                                    $(this).attr('href') &&
                                                    $(this)
                                                        .attr('href')
                                                        .startsWith('/')
                                                ) {
                                                    $(this).attr(
                                                        'href',
                                                        apiHost +
                                                            $(this).attr('href')
                                                    );
                                                }
                                            });
                                        helpPopup
                                            .find('#open-new')
                                            .attr(
                                                'href',
                                                article.article.html_url
                                            );
                                        // track event in mixpanel
                                        dmTrackEvent(
                                            'open-help-article',
                                            'cid',
                                            cid
                                        );
                                    }
                                );
                            }
                        );
                    },

                    getArticleByLabel: function(label, callback) {
                        $.get(
                            apiHost +
                                '/api/v2/help_center/articles/search.json?label_names=' +
                                label,
                            function(data) {
                                $.get(
                                    apiHost +
                                        '/api/v2/help_center/' +
                                        $.dHelpPopup.getArticleLocale() +
                                        '/articles/' +
                                        data.results[0].id +
                                        '.json',
                                    function(response) {
                                        var article = response.article;
                                        var contentDiv = $('<div />', {
                                            html: article.body
                                        });

                                        // fix relative links
                                        contentDiv.find('a').each(function() {
                                            $(this).attr('target', '_blank');
                                            if (
                                                $(this).attr('href') &&
                                                $(this)
                                                    .attr('href')
                                                    .startsWith('/')
                                            ) {
                                                $(this).attr(
                                                    'href',
                                                    apiHost +
                                                        $(this).attr('href')
                                                );
                                            }
                                        });

                                        callback({
                                            title: article.title,
                                            content: contentDiv.html(),
                                            url: article.html_url
                                        });
                                    }
                                );
                            }
                        );
                    }
                };
            })()
        });
        $.dHelpPopup.init();
    });
})(jQuery, this);
