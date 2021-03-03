export const copyText = (text) => {
    navigator.clipboard.writeText(text).then(
        function () {
                /* clipboard successfully set */
                return true
        },
        function () {          
                /* clipboard write failed */
                return false
        }
    );
  }