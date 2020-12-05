import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function getUpcomingEvents(action) {
    var userId=action.action;
    //console.log(userId);
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.EVENTLIST + '?userId.equals=' + userId +'&eventAttendance.event.startTime.greaterThan=' + isodate,
        null,
        'get',
        null
    );
  }

export  function getPastEvents(action) {
    var userId=action.action;
    //console.log(userId);
    var dateobj = new Date(); 
    var isodate = dateobj.toISOString(); 
    return Api(
        ApiConstants.EVENTLIST + '?userId.equals=' + userId +'&eventAttendance.event.startTime.lessThan=' + isodate,
        null,
        'get',
        null
    );
}
