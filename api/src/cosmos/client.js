'use strict';

const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const dbName = process.env.COSMOS_DB_NAME || 'eng2br';
const containerName = process.env.COSMOS_CONTAINER_NAME || 'user_progress';

if (!endpoint || !key) {
  console.warn('[cosmos] WARNING: COSMOS_ENDPOINT or COSMOS_KEY not set.');
}

/** Lazily-created CosmosClient container – throws if credentials are missing. */
function getContainer() {
  if (!endpoint || !key) {
    throw new Error('Cosmos DB is not configured. Set COSMOS_ENDPOINT and COSMOS_KEY.');
  }
  const client = new CosmosClient({ endpoint, key });
  return client.database(dbName).container(containerName);
}

// Cache the container reference after first successful creation
let _container = null;

const container = new Proxy(
  {},
  {
    get(_target, prop) {
      if (!_container) {
        _container = getContainer();
      }
      const value = _container[prop];
      return typeof value === 'function' ? value.bind(_container) : value;
    },
  }
);

module.exports = { container };
