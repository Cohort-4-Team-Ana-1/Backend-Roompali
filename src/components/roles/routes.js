const express = require('express')
const controllerRoles = require('./controller')

const rolesApi = app => {
  const router = express.Router()
  app.use('/api/roles', router)

  router.get('/', async (req, res, next) => {
    try {
      const roles = await controllerRoles.readRoles()
      res.status(200).json({
        message: 'Roles listed',
        total: roles.length,
        body: roles
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:rolId', async (req, res, next) => {
    try {
      const rol = await controllerRoles.readOneRol(req.params.rolId)
      res.status(200).json({
        message: rol ? 'Rol listed' : 'Rol not found',
        body: rol || ''
      })
    } catch (error) {
      next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    try {
      const rol = await controllerRoles.createRol(req.body)
      res.status(201).json({
        message: 'Rol created',
        body: rol
      })
    } catch (error) {
      next(error)
    }
  })

  router.patch('/:rolId', async (req, res, next) => {
    try {
      const rolId = req.params.rolId
      const rolBody = req.body
      const rol = await controllerRoles.updateRol(rolId, rolBody)
      res.status(200).json({
        message: 'Rol updated',
        body: rol
      })
    } catch (error) {
      next(error)
    }
  })

  router.delete('/:rolId', async (req, res, next) => {
    try {
      await controllerRoles.deleteRol(req.params.rolId)
      res.status(200).json({
        message: `Rol ${req.params.rolId} was deleted`
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = rolesApi
