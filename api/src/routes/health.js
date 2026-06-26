'use strict';

const { Router } = require('express');

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'eng2br-api',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
