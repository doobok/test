import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    languages: [
        new MLanguage('ru').create({
            hello: 'Привет',

        }),

        new MLanguage('uk').create({
            hello: 'Привіт',

        }),

    ]
})
