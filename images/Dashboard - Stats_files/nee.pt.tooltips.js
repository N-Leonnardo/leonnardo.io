$(function() {
  $.cssEase['bounce'] = 'cubic-bezier(0.495, 1, 0.205, 0.950)';
  var ANIMATION_DURATION = 150;
  var oneShowEffect = function(offset) {
    var tooltip = $(this);
    tooltip.css({
      opacity: 0
    });
    tooltip.show();
    tooltip.transition({
      duration: ANIMATION_DURATION,
      opacity: 1,
      y: 10,
      easing: 'bounce',
      complete: function() {
        tooltip.css({
          opacity: ""
        });
      }
    });
  };

  var oneHideEffect = function(offset, options) {
    var tooltip = $(this);
    tooltip.transition({
      opacity: 0,
      duration: ANIMATION_DURATION,
      complete: function() {
        tooltip.hide();
        tooltip.css({
          opacity: ""
        });
        tooltip.css({
          translate: [0, 0]
        });
      }
    });
  };

  var oneTip = {
    corner: 'top center',
    border: 0,
    width: 25,
    height: 6,
    background: '#313131',
    radius: 5
  };
  var oneTipBottom = {
    corner: 'bottom center',
    border: 0,
    width: 25,
    height: 6,
    background: '#313131',
    radius: 5
  };

  $.extend({
    ptToolTips: (function() {
      var activateToolTips = commonProps["editor.pt.tooltips"];

      var qTipOptions = {
        /*common options for all tool tips*/
        common: {
          show: {
            delay: 600,
            effect: function() {
              var tooltip = $(this);
              tooltip.css({
                opacity: 0
              });
              tooltip.show();
              tooltip.transition({
                duration: ANIMATION_DURATION,
                opacity: 1,
                easing: 'ease',
                complete: function() {
                  tooltip.css({
                    opacity: ""
                  });
                }
              });
            },
            event: 'mouseover'
          },
          position: {
            at: "right center",
            my: "left center",
            adjust: {
              x: 10
            }
          },
          style: {
            classes: 'ui-tooltip-light ui-tooltip-rounded ui-tooltip-shadow dmtooltip',
            tip: {
              corner: false
            },
            def: false
          },
          dontHide: false,
          hide: {
            event: 'mouseleave',
            fixed: true,
            effect: function(offset) {
              var tooltip = $(this);
              var options = tooltip.data().qtip.options;
              tooltip.transition({
                opacity: 0,
                duration: ANIMATION_DURATION,
                complete: function() {
                  tooltip.hide();
                  tooltip.css({
                    opacity: ""
                  });
                  if(options.hide.destroy) {
                    tooltip.qtip("destory");
                  }
                }
              });
            }
          }
        },
        /*custom options for side menu button*/
        "sideMenuButton": {
          position: {
            adjust: {
              x: -60
            }
          }
        },
        /*custom options for widget button*/
        "bigSquareButton": {
          position: {
            at: "top left",
            my: "bottom left",
            adjust: {
              x: 40,
              y: 28
            }
          }
        },
        /*custom properties for elements that their tooltip is shown beneath them*/
        "under": {
          position: {
            at: "bottom center",
            my: "top center",
            adjust: {
              y: 5
            }
          }
        },
        "above": {
          position: {
            at: "top center",
            my: "bottom center",
            adjust: {
              y: -10,
              x: -1
            }
          },
          show: {
            delay: 0
          }
        },

        /*custom properties for layout navigation style*/
        "navigationStyle": {
          position: {
            at: "top left",
            my: "bottom left",
            adjust: {
              x: 40,
              y: 28
            }
          },
          show: {
            delay: 200
          }
        },
        "inlineEditor": {
          position: {
            at: "left center",
            my: "right center",
            adjust: {
              x: -10
            }
          }
        },

        "d1-topbar-right-corner": {
          position: {
            at: "bottom center",
            my: "bottom right",
            adjust: {
              y: 75
            }
          }
        },

        "d1-topbar": {
          show: {
            delay: 1000,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          },
          position: {
            at: "bottom center",
            my: "bottom center",
            adjust: {
              y: 30
            }
          },
          style: {
            tip: oneTip
          },
          destroyOnClick: true
        },
        "d1-topbar-blocked": {
          show: {
            delay: 500,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          },
          position: {
            at: "bottom center",
            my: "bottom center",
            adjust: {
              y: 50,
              x: -1
            }
          },
          style: {
            classes: 'ui-tooltip-light ui-tooltip-rounded ui-tooltip-shadow blockedDeviceTip',
            tip: oneTip
          }
        },
        "d1-topbar-publish": {
          show: {
            delay: 1000,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          },
          position: {
            at: "bottom center",
            my: "bottom center",
            adjust: {
              y: 45,
              x: -5
            }
          },
          style: {
            tip: oneTip
          }
        },
        "d1-topbar-links": {
          show: {
            delay: 1000,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          },
          position: {
            at: "bottom center",
            my: "bottom center",
            adjust: {
              y: 35
            }
          },
          style: {
            tip: oneTip
          }
        },
        "d1-plans-row": {
          show: {
            delay: 200
          }
        },

        "d1-footer": {
          position: {
            at: "top center",
            my: "bottom center",
            adjust: {
              y: -10
            }
          },
          style: {
            tip: oneTipBottom
          },
          show: {
            delay: 100,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          }
        },
        "d1-topBanner": {
          position: {
            at: "bottom left",
            my: "top center",
            adjust: {
              x: 60
            }
          },
          style: {
            tip: oneTip
          },
          show: {
            delay: 100,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          }
        },

        "complexTip": {
          style: {
            classes: 'dm-complex-tip'
          }
        },

        "customCssTip": {
          style: {
            classes: 'dm-complex-tip dm-no-max-width-tip'
          },
          show: {
            delay: 0,
            event: 'click'
          },
          hide: {
            event: 'unfocus'
          },
          content: {
            button: 'close'
          }
        },

        "noDelay": {
          show: {
            delay: 0
          }
        },

        "notifs-dashboard": {
          position: {
            at: "top center",
            my: "bottom center",
            adjust: {
              y: -20,
              x: -1
            }
          },
          style: {
            classes: "ui-tooltip-light ui-tooltip-rounded dmtooltip notifs-dashboard-tip"
          },
          show: {
            delay: 1000,
            effect: oneShowEffect
          },
          hide: {
            effect: oneHideEffect
          }
        },

        "notifs-immediate": {
          position: {
            at: "top center",
            my: "bottom center",
            adjust: {
              y: -20,
              x: -1
            }
          },
          style: {
            classes: "ui-tooltip-light ui-tooltip-rounded dmtooltip notifs-dashboard-tip"
          },
          show: {
            delay: 0
          },
          hide: {
            effect: oneHideEffect
          }
        }
      };

      /* Here you can define static element's selector and its tooltip options
       'options' can be a type (e.g sideMenuButton) or an inline qtip options object literal*/
      var selectors = {
        /*Layout*/
        "#ptSideMenuDesignLayout": {
          message: dmStr["ui.nee.tooltip.1"],
          options: "sideMenuButton"
        },
        /*Style*/
        "#ptSideMenuDesignColors": {
          message: dmStr["ui.nee.tooltip.2"],
          options: "sideMenuButton"
        },
        /*Header*/
        "#ptSideMenuDesignHeader": {
          message: dmStr["ui.nee.tooltip.3"],
          options: "sideMenuButton"
        },
        /*Pages*/
        "#ptSideMenuEdit[data-tabs-id=2]": {
          message: dmStr["ui.nee.tooltip.4"],
          options: "sideMenuButton"
        },
        /*Go Live*/
        "#ptSideMenuGolive[data-tabs-id=3]": {
          message: dmStr["ui.nee.tooltip.5"],
          options: "sideMenuButton"
        },
        /*Navigation Layout*/
        "#ptNavigationLayoutTitle": {
          message: dmStr["ui.nee.tooltip.6"]
        },
        /*Navigation Style*/
        "#ptNavigationStyleTitle": {
          message: dmStr["ui.nee.tooltip.7"]
        },
        /*Color Palettes*/
        '#ptPalettesTitleText': {
          message: dmStr["ui.nee.tooltip.8"]
        },
        /*Text Style*/
        '#ptTextStyleTitle': {
          message: dmStr["ui.nee.tooltip.9"]
        },
        /*Text & Links*/
        '#ptOpenColorText': {
          message: dmStr["ui.nee.tooltip.10"],
          options: "bigSquareButton"
        },
        /*Heading*/
        '#ptOpenColorHeader': {
          message: dmStr["ui.nee.tooltip.11"],
          options: "bigSquareButton"
        },
        /*Header Type*/
        '#ptHeaderTypeTitle': {
          message: dmStr["ui.nee.tooltip.12"]
        },
        /*Use "App Style" Header*/
        '#headerFixedIsSkinnk': {
          message: dmStr["ui.nee.tooltip.13"],
          options: "under"
        },
        '#headerSkinnySelection': {
          message: dmStr["ui.nee.tooltip.13"],
          options: "under"
        },
        /*Fixed Header*/
        '#headerFixedIsFixed': {
          message: dmStr["ui.nee.tooltip.14"],
          options: "under"
        },
        '#headerFixedSelection': {
          message: dmStr["ui.nee.tooltip.14"],
          options: "under"
        },
        /*Page Info*/
        '#ptPageInfoTitle': {
          message: dmStr["ui.nee.tooltip.15"]
        },
        /*SEO & Page Settings*/
        "#openPageSettingsPopUp": {
          message: dmStr["ui.nee.tooltip.16"],
          options: "under"
        },
        /*All Changes Saved*/
        "#neeNotifyArea": {
          message: dmStr["ui.autoSaveChange.1"],
          options: "under"
        },
        /*List Layout*/
        /*Rounded With Corners*/
        "#ListStyle1 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.1"],
          options: "navigationStyle"
        },
        /*Squared with icons*/
        "#ListStyle2 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.2"],
          options: "navigationStyle"
        },
        /*Squared with arrows*/
        "#ListStyle3 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.3"],
          options: "navigationStyle"
        },
        /*Transparent with icons*/
        "#ListStyle4 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.4"],
          options: "navigationStyle"
        },
        /*Transparent with arrows*/
        "#ListStyle5 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.5"],
          options: "navigationStyle"
        },
        /*Matrix Layout*/
        /*Rounded, 3 in a row*/
        "#MatrixStyle_1 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.6"],
          options: "navigationStyle"
        },
        /*3 in a row*/
        "#MatrixStyle_2 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.7"],
          options: "navigationStyle"
        },
        /*Squared, 2 in a row*/
        "#MatrixStyle_3 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.8"],
          options: "navigationStyle"
        },
        /*2 in a row*/
        "#MatrixStyle_4 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.9"],
          options: "navigationStyle"
        },
        /*Icons, 2 in a row*/
        "#MatrixStyle_5 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.10"],
          options: "navigationStyle"
        },
        /*Expanding Layout*/
        /*Rounded buttons*/
        "#ExpendingStyle1 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.11"],
          options: "navigationStyle"
        },
        /*Squared buttons*/
        "#ExpendingStyle2 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.12"],
          options: "navigationStyle"
        },
        /*Transparent, rounded  buttons*/
        "#ExpendingStyle3 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.13"],
          options: "navigationStyle"
        },
        /*Floating*/
        "#ExpendingStyle4 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.14"],
          options: "navigationStyle"
        },
        /*Edge to Edge*/
        "#ExpendingStyle5 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.15"],
          options: "navigationStyle"
        },
        /*Bottom Layout*/
        /*Simple*/
        "#BottomStyle1 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.16"],
          options: "navigationStyle"
        },
        /*Filled*/
        "#BottomStyle2 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.17"],
          options: "navigationStyle"
        },
        /*Tab style*/
        "#BottomStyle3 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.18"],
          options: "navigationStyle"
        },
        /*Pointing arrow*/
        "#BottomStyle4 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.19"],
          options: "navigationStyle"
        },
        /*Top Layout*/
        /*Edge to Edge Tab style*/
        "#TopStyle1 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.20"],
          options: "navigationStyle"
        },
        /*Edge to Edge button style*/
        "#TopStyle2 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.21"],
          options: "navigationStyle"
        },
        /*Floating with dividers*/
        "#TopStyle3 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.22"],
          options: "navigationStyle"
        },
        /*Floating*/
        "#TopStyle4 .navTypeItemPhone .navTypeItemImg": {
          message: dmStr["ui.nee.variations.14"],
          options: "navigationStyle"
        },
        /* Widget Title - Generic title design button */
        "#generalWidgetTitleController #designTitleBtn": {
          message: dmStr["ui.nee.genericTitle.2"],
          options: ""
        },
        /* Widget Title - Generic title display/hide */
        "#generalWidgetTitleController #toggleTitleBtn": {
          message: dmStr["ui.nee.genericTitle.1"],
          options: ""
        },
        /* Gallery - preview gallery link */
        ".explanationHowToGallery .explanationHowToGalleryLinkable": {
          message: dmStr["ui.nee.imageMsgs.3"],
          options: "under"
        },
        /* Gallery - delete all images msg */
        ".explanationHowToGallery .deleteAllImagesBtn": {
          message: dmStr["ui.nee.imageMsgs.1"],
          options: "under"
        },
        /* Account settings - sub domain */
        ".editorPanel .tipDefaultDomain": {
          message: dmStr["ui.accountSettingsTips.12"]
        },
        /* Account settings - sub domain */
        ".editorPanel .tipCustomDomain": {
          message: dmStr["ui.accountSettingsTips.2"]
        },
        /* Account settings - sub domain */
        ".previewPanel .tipDefaultDomain": {
          message: dmStr["ui.accountSettingsTips.10"]
        },
        /* Account settings - sub domain */
        ".previewPanel .tipCustomDomain": {
          message: dmStr["ui.accountSettingsTips.11"]
        },
        /* Account settings - sub domain */
        ".mobileSitePanel .tipDefaultDomain": {
          message: dmStr["ui.accountSettingsTips.8"]
        },
        /* Account settings - sub domain */
        ".mobileSitePanel .tipCustomDomain": {
          message: uiPerms.D_AWARE ? dmStr["ui.accountSettingsTips.9"] : dmStr["ui.accountSettingsTips.9.custom.brand"]
        },
        /* Account settings - sub domain */
        ".oneSitePanel .tipDefaultDomain": {
          message: uiPerms.D_AWARE ? dmStr["ui.accountSettingsTips.6"] : dmStr["ui.accountSettingsTips.6.custom.brand"]
        },
        /* Account settings - sub domain */
        ".oneSitePanel .tipCustomDomain": {
          message: uiPerms.D_AWARE ? dmStr["ui.accountSettingsTips.7"] : dmStr["ui.accountSettingsTips.7.custom.brand"]
        },
        /* Account settings - sub domain */
        ".accountDomainBox #accountTipGenDomain": {
          message: dmStr["ui.accountSettingsTips.3"]
        },
        /* Account settings - sub domain */
        ".accountDomainBox #accountTipLiveCusDomain": {
          message: dmStr["ui.accountSettingsTips.4"]
        },
        /* Account settings - reseller custom domain */
        ".accountDomainBox #accountTipResellerCusDomain": {
          message: dmStr["ui.accountSettingsTips.2"]
        },
        /*Account settings - custom branding, logo */
        ".accountCustomLogo #accountCustomLogoTip": {
          message: dmStr["ui.accountSettingsTips.5"]
        },
        /*Custom CSS */
        "#customCssPopupToShow .customCssMoreInfo": {
          messageBody: uiPerms.D_AWARE ? dmStr["ui.custom.css.2"] : dmStr["ui.custom.css.2.custom.brand"],
          messageHeader: dmStr["ui.custom.css.1"],
          options: "customCssTip"
        },
        /*Manage users stats weekly*/
        ".edit-mode #statsMailTip": {
          message: dmStr["ui.manage.users.45"] + '<br/>' + dmStr["ui.manage.users.48"]
        },
        ".new-user #statsMailTip": {
          message: dmStr["ui.manage.users.45"]
        }
      };

      return {

        init: function() {
          var selector;
          this._qTipOptions = {};
          if($.dmfw.isPT() && activateToolTips) {
            $.each(selectors, function(selector) {
              var onMouseover = (function(selector) {
                var selectorTip = selectors[selector];
                var customOptions = $.type(selectorTip.options) === 'string' ? qTipOptions[selectorTip.options] : selectorTip.options;
                return function(event) {
                  var message;
                  if(!$(this).data('qtip')) {
                    message = selectorTip.message;
                    if(selectorTip.messageBody && selectorTip.messageHeader) {
                      message = $.ptToolTips.constructComplexMessage(selectorTip.messageHeader, selectorTip.messageBody);
                    }
                    $.ptToolTips.setToolTip(selector, message, undefined, undefined, customOptions, true, false, true);
                  }
                };
              })(selector)
              $(document).on('mouseover', selector, onMouseover);
            })
          }

        },

        setToolTip: function(selector, message, element, target, options, showNow, withinPreviewArea, isAutoToolTip) {
          if(activateToolTips) {
            var $el = element || $(selector);
            var $target = target || $(selector);
            var delayTip, qOptions, x, y;
            qOptions = {
              element: element,
              selector: selector,
              text: message
            };
            $.extend(true, qOptions, qTipOptions.common);
            $.extend(true, qOptions, options);
            if(withinPreviewArea) {
              x = qOptions.position && qOptions.position.adjust && qOptions.position.adjust.x || 0;
              y = qOptions.position && qOptions.position.adjust && qOptions.position.adjust.y || 0;
              qOptions.position.adjust.x = x + NEFW.PREVIEW.offset().left;
              qOptions.position.adjust.y = y + NEFW.PREVIEW.offset().top - $($el.get(0).ownerDocument).scrollTop();
            }
            if(showNow) {

              delayTip = setTimeout(function() {
                if($el.attr("no-tip")) {
                  return;
                }
                //$.dmfw.hideAllQTips();
                qOptions.show.solo = true;
                var $tipEl = $.dmfw.showQTip(qOptions);
                if(qOptions.show.event !== 'click') {
                  $tipEl.qtip('show');
                }
              }, qOptions.show.delay);
              $el.one("mousedown.hidetip", function() {
                if(qOptions.destroyOnClick) {
                  $el.attr("no-tip", true);
                  $.dmfw.hideQTip(qOptions);
                  $el.qtip("destroy", true);
                  clearTimeout(delayTip);
                }

              });
              $el.one('mouseleave', function() {
                $el.removeAttr("no-tip");
                clearTimeout(delayTip);
                //			        	        if (!$el.data('qtip')){
                //			        	            $.dmfw.showQTip(qOptions);
                //			        	        }
              });
            } else {
              qOptions.show.event = 'mouseenter';
              qOptions.show.ready = false;
              $.dmfw.showQTip(qOptions);
            }

          }
          return $el;
        },

        /* Get qtip options by type (e.g "sideMenuButton")*/
        getOptions: function(type) {
          type = type || 'common';
          this._qTipOptions[type] = this._qTipOptions[type] || $.extend({}, qTipOptions[type]);
          return this._qTipOptions[type];
        },

        constructComplexMessage: function(messageHeader, messageBody) {
          return "<div class='tipHeader'>" + messageHeader + "</div><div class='tipBody'>" + messageBody + "</div>"
        }
      };
    })()
  });
  $.ptToolTips.init();
});