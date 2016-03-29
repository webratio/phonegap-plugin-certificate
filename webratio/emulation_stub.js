function createStubs() {

    function log() {
        var args = [].slice.call(arguments, 0);
        args.unshift("[certificates]");
        console.log.apply(console, args);
    }

    return {
        CertificatesPlugin: {
            setUntrusted: function(activate) {
				log("Untrusted certificates", (activate ? "ACCEPTED" : "REJECTED"));
            }
        },
        CDVCertificate: {
            setUntrusted: function(activate) {
				log("Untrusted certificates", (activate ? "ACCEPTED" : "REJECTED"));
            }
        }
    };
};