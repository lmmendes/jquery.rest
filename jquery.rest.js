(function($){
  
  $.extend({
    
    put: function(url, data, callback, type){
      if( jQuery.isFunction(data) ){
        type= type || callback;
        callback = data;
        data=null;
      }
      return jQuery.ajax({
        type: 'PUT'
        url: url,
        data: data,
        success: callback,
        dataType: type
      });
    },
    
    delete: function(url, data, callback, type){
      if( jQuery.isFunction(data) ){
        type= type || callback;
        callback = data;
        data=null;
      }
      return jQuery.ajax({
        type: 'DELETE'
        url: url,
        data: data,
        success: callback,
        dataType: type
      });
    }
    
  });
  
})(jQuery);