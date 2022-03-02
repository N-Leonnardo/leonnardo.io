document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
});

function initDashboard() {
    loadModule('dashboard').then(function(dashboardModule) {
        dashboardModule.openApp('shell', {
            containerId: 'dashboard-conatiner',
            hallDashboardData: window.hallDashboardData
        });
    });
}

function loadModule(moduleName) {
    return window.$.modulesManager.getModuleAsync(moduleName);
}
