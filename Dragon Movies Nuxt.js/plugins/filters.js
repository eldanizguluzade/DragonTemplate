import  Vue  from  "vue";

Vue.filter("capitalize",  function(value)  {
  if  (!value) 
    return  "";

  value  =  value.toString();
  return  value.charAt(0).toUpperCase()  +  value.slice(1);
});

Vue.filter("letterFilter",  function(value)  {
    if (!value) return '';
      return value.slice(0, value.length-1);
});