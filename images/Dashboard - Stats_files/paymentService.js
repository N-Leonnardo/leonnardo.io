(function() {
    window.paymentService = {
        getPricingMixpanelParams: function({ siteId }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(
                        {
                            isPublished: true,
                            siteFrequency: 'monthly',
                            isPartOfSiteCredit: false,
                            storeType: 'small',
                            domain: 'www.ben.com'
                        },
                        100
                    );
                });
            });
        },

        sendPricingMixpanelEvent: async function({ eventName, siteId, ...rest }) {
            const pricingMixpanelParams = await this.getPricingMixpanelParams({ siteId });
            window.edTrackEvent(eventName, { ...pricingMixpanelParams, ...rest });
        }
    };
})();
