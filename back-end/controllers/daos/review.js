const { getModelForCollection, response, enums } = require('../../shared/mongoose')

const create = async () => {

    const model = await getModelForCollection("sample")
    console.log(model)
    const newModel = new model()
    console.log(newModel)
    model.create()
    return {}
}


create()
    