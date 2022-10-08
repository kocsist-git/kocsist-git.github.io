
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=f13a33bf84474fd8b624607aeb9797e1", function(data) {
    console.log(data);
    document.getElementById("IpAddress").innerHTML=data.ip_address;
    document.getElementById("isVPN").innerHTML=data.security.is_vpn;
    document.getElementById("IspName").innerHTML=data.connection.isp_name;
    document.getElementById("Continent").innerHTML=data.continent
    document.getElementById("Country").innerHTML=data.country
    document.getElementById("Region").innerHTML=data.region
    document.getElementById("PostalCode").innerHTML=data.postal_code
    document.getElementById("City").innerHTML=data.city
    document.getElementById("CountryIsEu").innerHTML=data.country_is_eu
})

