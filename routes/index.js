const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const pool = require("../database/database"); // Asegúrate de que la ruta sea correcta
require('dotenv').config(); // Cargar variables de entorno

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true para el puerto 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER, // Usar variable de entorno
    pass: process.env.EMAIL_PASS, // Usar variable de entorno
  },
  tls: {
    rejectUnauthorized: false,
  },
});
// Ruta para recibir datos del formulario de contacto
router.post('./Contacto/send', async function (req, res) {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { nombre, apellido, correo, telefono, asunto, mensaje } = req.body;

    // Validar que todos los campos estén presentes
    if (!nombre || !apellido || !correo || !telefono || !asunto || !mensaje) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    // Validar formato del correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      return res.status(400).json({ success: false, message: 'Correo electrónico inválido' });
    }

    // Crear objeto con los datos del correo
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const emailDt = { nombre, apellido, correo, telefono, asunto, mensaje, date };

    // Enviar correo electrónico
    const info = await transporter.sendMail({
      from: `"Formulario de Contacto" ${emailDt.correo}`, // Remitente
      to: "rauldejesusguadalupe@gmail.com", // Destinatario
      subject: `${asunto}`, // Asunto del correo
      html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #4CAF50;">Nuevo mensaje de contacto</h1>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Cliente:</strong> ${nombre} ${apellido}</li>
          <li><strong>Teléfono:</strong> ${telefono}</li>
          <li><strong>Correo:</strong> ${correo}</li>
        </ul>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      </div>`,
    });

    console.log('Correo enviado:', info);

    // Guardar datos en la base de datos
    await pool.query('INSERT INTO emails SET ?', emailDt);
    console.log('Datos insertados en la base de datos');

    // Respuesta exitosa al frontend
    res.json({ success: true, message: 'Mensaje enviado y almacenado correctamente' });
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

// Ruta para obtener todos los correos recibidos
router.get('/app/API/new-emails/resividos', async function (req, res) {
  try {
    // Consultar todos los correos en la base de datos
    const consulta = await pool.query("SELECT * FROM emails");
    res.json(consulta);
  } catch (error) {
    console.error('Error al obtener los correos:', error);
    res.status(500).json({ success: false, message: 'Error al obtener los correos' });
  }
});

module.exports = router;