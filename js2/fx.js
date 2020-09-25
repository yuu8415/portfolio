 function callTa(str){
            var s=str+' h2';
            setTimeout($(s).textFx({    
                    type: 'slideIn',
                    iChar: 10,
                    iAnim: '1500',
                    direction: 'top'       
                }), 800);
        }