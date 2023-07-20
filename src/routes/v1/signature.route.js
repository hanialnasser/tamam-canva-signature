const express = require('express');
const validate = require('../../middlewares/validate');
const signatureValidation = require('../../validations/signature.validation');
const signatureController = require('../../controllers/signature.controller');

const router = express.Router();

router.post('/:configurationId/node-canvas-image', validate(signatureValidation.getSignatureCanvasImage), signatureController.drawCanvasSignature);



module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Canvas
 *   description: Canvas-Signature
 */

/**
 * @swagger
 * /signature/{configurationId}/node-canvas-image:
 *   post:
 *     summary: Get a canvas signature image
 *     tags: [Canvas]
 *     parameters:
 *       - in: path
 *         name: configurationId
 *         required: true
 *         schema:
 *           type: string
 *         description: configuration id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               signature:
 *                 type: array
 *             example:
 *               signature: []
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/SignatureImage'
 */

