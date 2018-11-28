(function(){
    var pentagon = findSomethingByName('Pentagon')
    var hacker = MaternityHospital.create({name: 'John Dou', privileges: ['hacker']})

    doImportantJob(true)

    if(hacker.helloWorld() != null){
        hacker.hack(pentagon)
    }

    function findSomethingByName(name){
        var earth = findInUniverse('Earth')
        return earth.find(name)
    }

    function doImportantJob(isReallyImportatnt){
        if (isReallyImportatnt){
            doJob()
        } else {
            doJob() // because nothing is important
        }
    }
})()