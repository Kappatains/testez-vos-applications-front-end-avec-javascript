/**
* @jest-environment jsdom
*/
// Ici j'importe DOM Test Library

import '@testing-library/jest-dom'

import { getByTestId } from '@testing-library/dom'


import {router} from './index'

describe('Router Integration Test Suites', () => {
    it('should display the SignIn page', async() => {
        document.body.innerHTML = `<div id="root"></div>`

        await router()

        expect(getByTestId(document.body, 'sign-in-form-title')).toHaveTextContent('Veuillez vous connecter')
    })

    it('should display the Home page', async() => {
        document.body.innerHTML = `<div id="root"></div>`

        document.location = '/#/home' 

        await router()

        expect(getByTestId(document.body, 'home-sensors-title')).toHaveTextContent('Vos capteurs')
    })

    it('should display the Facade detail page', async() => {
        document.body.innerHTML = `<div id="root"></div>`

        document.location = '/#/facade-details' 

        await router()

        expect(getByTestId(document.body, 'sensor-detail-title')).toHaveTextContent('Détails du capteur #7')
    })
    it('should display the add-sensor page', async() => {
        document.body.innerHTML = `<div id="root"></div>`

        document.location = '/#/add-sensor' 

        await router()

        expect(getByTestId(document.body, 'add-sensor-title')).toHaveTextContent("Ajout d'un nouveau capteur")
    })


}
)
