angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        'name'          : 'GDG Brussels',
        'id'            : '105068877693379070381',
        'google_api'    : 'AIzaSyBuW84I4CwVyhC9F5lEmdgKjfHEABpopUM',
        'pwaId'        : '5923085386435987489', //picasa web album id, must belong to google+ id above
        'domain'        : 'http://gdg.brussels',
        'meetup'        : 'gdg-brussels',
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title : 'Visit our meetup community',
            subtitle : 'See all events.',
            button : {
                text : 'Join',
                url : 'http://www.meetup.com/gdg-brussels'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
    };
});
