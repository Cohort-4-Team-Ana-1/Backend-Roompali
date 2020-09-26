const proxyquire = require('proxyquire')
const assert = require('assert')
const RolControllerMock = require('../utils/mocks/rolesController')
const {rolIdTest,rolBodyMock} = require('../utils/mocks/roles')

describe('Roles - Controller',()=>{
    const rolesController = proxyquire('../components/roles/controller',{
        './schema': RolControllerMock
    })
    describe('When readRoles function is called ', async()=>{
        it('Should call find Function', async() =>{
            await rolesController.readRoles({})
            assert.strictEqual(RolControllerMock.readRolesStub.called,true)
        })
    })
    describe('When readOneRol function is called ', async()=>{
        it('Should call find Function', async() =>{
            await rolesController.readOneRol(rolIdTest)
            assert.strictEqual(RolControllerMock.readOneRolStub.called,true)
        })
    })
    describe('When createRol function is called ', async()=>{
        it('Should call find Function', async() =>{
            await rolesController.createRol(rolBodyMock)
            assert.strictEqual(RolControllerMock.createRolStub.called,true)
        })
    })
    describe('When updateRol function is called ', async()=>{
        it('Should call find Function', async() =>{
            await rolesController.updateRol(rolIdTest,rolBodyMock)
            assert.strictEqual(RolControllerMock.updateRolStub.called,true)
        })
    })
    describe('When deleteRol function is called ', async()=>{
        it('Should call find Function', async() =>{
            await rolesController.deleteRol({})
            assert.strictEqual(RolControllerMock.deleteRolStub.called,true)
        })
    })
})