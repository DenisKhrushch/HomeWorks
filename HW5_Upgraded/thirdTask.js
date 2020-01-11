'use strict';

(function() {
    class Validator {
        EMAIL_PATTERN = /[\w]+?@[\w]+/g;
        DOMAIN_PATTERN = /[\w]+\.[\w]+/g;
        PHONE_PATTERN = /^\+38[-. ]?(\([0-9]{3}\))[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/g;

        checkIsEmail(str) {
            return this.EMAIL_PATTERN.test(str);
        }

        checkIsDomain(str) {
            return this.DOMAIN_PATTERN.test(str);
        }

        checkIsDate(str) {
            return !isNaN(Date.parse(str));
        }

        checkIsPhone(str) {
            return this.PHONE_PATTERN.test(str);
        }
    }

    let validator = new Validator();

    console.log(validator.checkIsEmail("vasya.pupkin@gmail.com"));
    console.log(validator.checkIsDomain("google.com"));
    console.log(validator.checkIsDate("30.11.2019"));
    console.log(validator.checkIsPhone("+38 (066) 937 99 92"));
})();