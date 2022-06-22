function capitalize(string) {
    if(isNaN(string)){
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else
        return "invalid";
    
}

module.exports = capitalize;