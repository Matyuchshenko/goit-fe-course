

const checkForSpam = function(message) {
    const messageLower = message.toLowerCase();
    let search = (messageLower.includes('spam')) || (messageLower.includes('sale'));
    return search;
    };
 








console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true