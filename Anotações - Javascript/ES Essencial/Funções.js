//Vou escrever a mesma função de duas formas diferentes:

// 1 - verbosa:
function controlFnExec(fnParam){
    return function(allowed) {
        if (allowed) {
            fnParam();
        };
    };
};

// 2 - resumida:
const controlFnExec = (fnParam) => (allowed) => {
    if(allowed) {
        fnParam()
    }
}
const handleFnExecution = controlFnExec(fn)