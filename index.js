  //get the route from backend
  const token='eyJ0eXAiOiJKV1QiLCJub25jZSI6IjBiVDdPSElKSTBJalQ4aDN0dGtkOUNDMzVfbE9YMjVEVjlOY3BuMXFHX2ciLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZjVmODVkMy1hNTZmLTQzYWEtYmMzZS00YTQ5MzkwOWM2NjcvIiwiaWF0IjoxNjA3Mjc2ODI2LCJuYmYiOjE2MDcyNzY4MjYsImV4cCI6MTYwNzI4MDcyNiwiYWlvIjoiRTJSZ1lIaDQ1TXVEbmVrVFArNTZhN0NnYnZjN1pnQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJpbWJhbmtkZW1vIiwiYXBwaWQiOiI2N2I2MDZjOS04NDllLTQ0MmUtYmZhZS0wODE1NzRmZWQyNjMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZjVmODVkMy1hNTZmLTQzYWEtYmMzZS00YTQ5MzkwOWM2NjcvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiJhNmUxMzc0Mi1iNGJiLTQ1M2EtOWIyOC03NjNhN2RiMjljYjEiLCJyaCI6IjAuQUFBQTA0VmZ6Mi1scWtPOFBrcEpPUW5HWjhrR3RtZWVoQzVFdjY0SUZYVC0wbU41QUFBLiIsInJvbGVzIjpbIkFkbWluaXN0cmF0aXZlVW5pdC5SZWFkLkFsbCIsIkRpcmVjdG9yeS5SZWFkLkFsbCIsIlVzZXIuUmVhZC5BbGwiLCJBY2Nlc3NSZXZpZXcuUmVhZC5BbGwiLCJBcHBsaWNhdGlvbi5SZWFkLkFsbCJdLCJzdWIiOiJhNmUxMzc0Mi1iNGJiLTQ1M2EtOWIyOC03NjNhN2RiMjljYjEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiJjZjVmODVkMy1hNTZmLTQzYWEtYmMzZS00YTQ5MzkwOWM2NjciLCJ1dGkiOiIwZHNhc0tKdWswZTE2YnNMbkczckFBIiwidmVyIjoiMS4wIiwieG1zX3RjZHQiOjE2MDQwMDkyNzF9.W8mhi1SjgjagDarJKDIAaIj6oRsOoXZXOkX47AjyFhkVGxelqD0GIjxmO1gkfuUXh_rgOfShljYYC-k0DVMZkYMzWg-7qrcKWjE7C9Iny3vj8Dr7Bu7YzcL5OV0TurSAHp0_TLFgJNBw9Jg_HK2qbRMNOCwwreMWiyWpENTDuTc65ZTlUEL6xSzSpG04qCxDZQShwqNhc8dfKlH37mXHyFGvWT0JPLOwCs_XmU-qvS_2rLVLFJ8kZa5lH4Zl0sPWN-iNZFtcC0ZTY1BKI9XMFPZRrYEy_3duWA3G-DHiWVvbMwUnxvVEoDZaH38oyouwcgAdbWKOiJGfNOBtyh8wtQ'
  let users=[]
 fetch(`https://graph.microsoft.com/v1.0/users?$select=displayName,jobTitle,Department`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
      },

    }).then(response=>{
      return response.json()
    }).then(data=>{
    return  users.push(data.value)
    })
    //contains the array with the users
console.log(user)

//filter users by departmets
var userDepts = users.filter(function(user) {
  return user.department !==null;
});
//returns an empty array
console.log(userDepts)

 var sales = userDepts.filter(function(user) {
  return user.department =='Sales';
});
 var finance = users.filter(function(user) {
  return user.department =='Finance';
});
 var engineering = users.filter(function(user) {
  return user.department =='Engineering';
});
 var IT = users.filter(function(user) {
  return user.department =='IT';
});
 var marketing = users.filter(function(user) {
  return user.department =='Marketing';
});
 var Rd = users.filter(function(user) {
  return user.department =='R&D';
});
 var retail = users.filter(function(user) {
  return user.department =='Retail';
});
 var hr = users.filter(function(user) {
  return user.department =='HR';
});
 var op = users.filter(function(user) {
  return user.department =='Operations';
});
 var em = users.filter(function(user) {
  return user.department =='Executive Management';
});
 var legal = users.filter(function(user) {
  return user.department =='Legal';
});
 var salesmar = users.filter(function(user) {
  return user.department =='Sales & Marketing';
});
var Manufacturing = users.filter(function(user) {
  return user.department =='Manufacturing';
});

//this is the formart the chart takes check the basic example folder
ceo = {

        text:{
          name:em[1].displayName,
          title:em[1].jobTitle
  },
        image: "/sites/testone/Jeniffer/headshots/2.jpg"
    },

    cto = { 
        parent: ceo,
        text:{
            name: "Joe Linux",
            title: "Chief Technology Officer",
        },
        stackChildren: true,
        image: "/headshots/1.jpg"
    },
    cbo = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "Linda May",
            title: "Chief Business Officer",
        },
        image: "../headshots/5.jpg"
    },
    cdo = {
        parent: ceo,
        text:{
            name: "John Green",
            title: "Chief accounting officer",
            contact: "Tel: 01 213 123 134",
        },
        image: "../headshots/6.jpg"
    },
    cio = {
        parent: cto,
        text:{
            name: "Ron Blomquist",
            title: "Chief Information Security Officer"
        },
        image: "../headshots/8.jpg"
    },
    ciso = {
        parent: cto,
        text:{
            name: "Michael Rubin",
            title: "Chief Innovation Officer",
            contact: {val: "we@aregreat.com", href: "mailto:we@aregreat.com"}
        },
        image: "../headshots/9.jpg"
    },
    cio2 = {
        parent: cdo,
        text:{
            name: "Erica Reel",
            title: "Chief Customer Officer"
        },
        link: {
            href: "http://www.google.com"
        },
        image: "../headshots/10.jpg"
    },
    ciso2 = {
        parent: cbo,
        text:{
            name: "Alice Lopez",
            title: "Chief Communications Officer"
        },
        image: "../headshots/7.jpg"
    },
    ciso3 = {
        parent: cbo,
        text:{
            name: "Mary Johnson",
            title: "Chief Brand Officer"
        },
        image: "../headshots/4.jpg"
    },
    ciso4 = {
        parent: cbo,
        text:{
            name: "Kirk Douglas",
            title: "Chief Business Development Officer"
        },
        image: "../headshots/11.jpg"
    }
//this variable passed an argument in the chart frontend
 chart_config = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        cio2,
        ciso2,
        ciso3,
        ciso4
    ];



