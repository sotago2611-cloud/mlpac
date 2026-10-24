function user_proxy(url, host){

if ( shExpMatch(host, "icloud.com")
 ||  shExpMatch(host, "mask-api.icloud.com")
 ||  shExpMatch(host, "ocsp.pki.goog")
 ||  shExpMatch(host, "calendars.icloud.com")
 ||  shExpMatch(host, "caldav.icloud.com")
 ||  shExpMatch(host, "publicassets.cdn-apple.com")
 ||  shExpMatch(host, "app-site-association.cdn-apple.com")
 ||  shExpMatch(host, "token.safebrowsing.apple")
 ||  shExpMatch(host, "*.mobi-connect.net")
 ||  shExpMatch(host, "sequoia.cdn-apple.com")
 ||  shExpMatch(host, "cstat.cdn-apple.com")
 ||  shExpMatch(host, "ml.cdn-apple.com")
 ||  shExpMatch(host, "*.service-sync.com")
 ||  shExpMatch(host, "*.jhs.edu.city.koshigaya.saitama.jp")
 ||  shExpMatch(host, "s18sviis01")
 ||  shExpMatch(host, "s18vmccs01")
 ||  shExpMatch(host, "S18SVFSS01")
 ||  shExpMatch(host, "S25SVIIS01")
 ||  shExpMatch(host, "S25SVFSV01")
 ||  shExpMatch(host, "s18*")
 ||  shExpMatch(host, "S25SV*")
 ||  shExpMatch(host, "10.224.128.16")
 ||  shExpMatch(host, "10.224.128.14")
 ||  shExpMatch(host, "10.224.129.1")
 ||  shExpMatch(host, "10.224.129.2")
 ||  shExpMatch(host, "10.224.129.3")
 ||  shExpMatch(host, "10.224.132.1")
 ||  shExpMatch(host, "10.224.132.2")
 ||  shExpMatch(host, "10.224.132.16")
 ||  shExpMatch(host, "*.push.apple.com")
 ||  shExpMatch(host, "*.ls.apple.com")
 ||  shExpMatch(host, "ocsp2.apple.com")
 ||  shExpMatch(host, "ipcdn.apple.com")
 ||  shExpMatch(host, "cl2.apple.com")
 ||  shExpMatch(host, "configuration.apple.com")
 ||  shExpMatch(host, "websitereview.corp.apple.com")
 ||  shExpMatch(host, "swallow.apple.com")
 ||  shExpMatch(host, "gs-loc.apple.com")
 ||  shExpMatch(host, "lcdn-locator.apple.com")
 ||  shExpMatch(host, "smp-device-content.apple.com")
 ||  shExpMatch(host, "*.smoot.apple.com")
 ||  shExpMatch(host, "cl4.apple.com")
 ||  shExpMatch(host, "pancake.apple.com")
 ||  shExpMatch(host, "cl3.apple.com")
 ||  shExpMatch(host, "kt-prod.ess.apple.com")
 ||  shExpMatch(host, "gsp10-ssl.apple.com")
 ||  shExpMatch(host, "*.dns.apple.com")
 ||  shExpMatch(host, "gsa.apple.com")
 ||  shExpMatch(host, "*.pcms.apple.com")
 ||  shExpMatch(host, "cl4-cn.apple.com")
 ||  shExpMatch(host, "guzzoni.apple.com")
 ||  shExpMatch(host, "tbsc.apple.com")
 ||  shExpMatch(host, "wps.apple.com")
 ||  shExpMatch(host, "valid.apple.com")
 ||  shExpMatch(host, "init.ess.apple.com")
 ||  shExpMatch(host, "init.gc.apple.com")
 ||  shExpMatch(host, "pds-init.ess.apple.com")
 ||  shExpMatch(host, "init-p01md.apple.com")
 ||  shExpMatch(host, "playgrounds-cdn.apple.com")
 ||  shExpMatch(host, "cdsassets.apple.com")
 ||  shExpMatch(host, "gdmf-ados.apple.com")){
    return "DIRECT";
}
var resolved_IP = dnsResolve(host);
if (isInNet(resolved_IP, "10.224.0.0", "255.255.0.0")
 || isInNet(resolved_IP, "10.128.0.0", "255.255.0.0")
 || isInNet(resolved_IP, "10.129.0.0", "255.255.0.0")
 || isInNet(resolved_IP, "10.130.0.0", "255.255.0.0")){
    return "DIRECT";
}

return "PROXY 127.0.0.1:8080";

}


function FindProxyForURL(url, host){

if( shExpMatch(host, "*.digitalartscloud.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "albert.apple.com") ||
    shExpMatch(host, "captive.apple.com") ||
    shExpMatch(host, "gs.apple.com") ||
    shExpMatch(host, "humb.apple.com") ||
    shExpMatch(host, "static.ips.apple.com") ||
    shExpMatch(host, "*.push.apple.com") ||
    shExpMatch(host, "gdmf.apple.com") ||
    shExpMatch(host, "deviceenrollment.apple.com") ||
    shExpMatch(host, "deviceservices-external.apple.com") ||
    shExpMatch(host, "identity.apple.com") ||
    shExpMatch(host, "iprofiles.apple.com") ||
    shExpMatch(host, "mdmenrollment.apple.com") ||
    shExpMatch(host, "setup.icloud.com") ||
    shExpMatch(host, "vpp.itunes.apple.com") ||
    shExpMatch(host, "appldnld.apple.com") ||
    shExpMatch(host, "gg.apple.com") ||
    shExpMatch(host, "mesu.apple.com") ||
    shExpMatch(host, "updates-http.cdn-apple.com") ||
    shExpMatch(host, "updates.cdn-apple.com") ||
    shExpMatch(host, "xp.apple.com") ||
    shExpMatch(host, "*.itunes.apple.com") ||
    shExpMatch(host, "*.apps.apple.com") ||
    shExpMatch(host, "*.mzstatic.com") ||
    shExpMatch(host, "itunes.apple.com") ||
    shExpMatch(host, "ppq.apple.com") ||
    shExpMatch(host, "crl.apple.com") ||
    shExpMatch(host, "crl.entrust.net") ||
    shExpMatch(host, "crl3.digicert.com") ||
    shExpMatch(host, "crl4.digicert.com") ||
    shExpMatch(host, "ocsp.apple.com") ||
    shExpMatch(host, "ocsp.digicert.com") ||
    shExpMatch(host, "ocsp.entrust.net") ||
    shExpMatch(host, "ocsp.verisign.net") ||
    shExpMatch(host, "gateway.icloud.com") ||
    shExpMatch(host, "*keyvalueservice.icloud.com") ||
    shExpMatch(host, "testflight.apple.com") ||
    shExpMatch(host, "zoom.us") ||
    shExpMatch(host, "*.zoom.us") ||
    shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.lync.com") ||
    shExpMatch(host, "*.teams.microsoft.com") ||
    shExpMatch(host, "teams.microsoft.com") ||
    shExpMatch(host, "*.teams.microsoft.us") ||
    shExpMatch(host, "*.skype.com") ||
    shExpMatch(host, "*fmip.icloud.com") ||
    shExpMatch(host, "cdn2.scratch.mit.edu") ||
    shExpMatch(host, "cdn.assets.scratch.mit.edu") ||
    shExpMatch(host, "assets.scratch.mit.edu") ||
    shExpMatch(host, "nhk-vh.akamaihd.net") ||
    shExpMatch(host, "nhks-vh.akamaihd.net") ||
    shExpMatch(host, "loilonote-assets.loilo.tv") ||
    shExpMatch(host, "kh.google.com") ||
    shExpMatch(host, "cu-video-cdn.tbs.co.jp") ||
    shExpMatch(host, "vod-stream.nhk.jp") ||
    shExpMatch(host, "media.vd.st.nhk") ||
    shExpMatch(host, "archive.hsk.st.nhk") ||
    shExpMatch(host, "simul.hsk.st.nhk") ||
    shExpMatch(host, "simul.drdi.st.nhk") ||
    shExpMatch(host, "v01.mediadelivery.st.nhk") ||
    shExpMatch(host, "abc-live00.ipcasting.jp") ||
    shExpMatch(host, "abc-live01.ipcasting.jp") ||
    shExpMatch(host, "fonts.gstatic.com") ||
    shExpMatch(host, "font-public.canva.com") ||
    shExpMatch(host, "iphonesubmissions.apple.com") ||
    shExpMatch(host, "probe.icloud.com") ||
    shExpMatch(host, "pong.icloud.com") ||
    shExpMatch(host, "metrics.icloud.com") ||
    shExpMatch(host, "apple-native-relay.apple.com") ||
    shExpMatch(host, "*.vk-live.asahi.co.jp"))
{
    return "DIRECT";
}


return user_proxy(url, host);

}