const { Client } = require('@notionhq/client');

const NOTION_API_KEY = process.env.NOTION_API_KEY;

if (!NOTION_API_KEY) {
  throw new Error('The NOTION_API_KEY environment variable is missing.');
}

const notion = new Client({
  auth: NOTION_API_KEY,
});

module.exports = notion;
