# Notion Database Item Creator

This is a Node.js script that demonstrates how to add an item to a Notion database using the Notion API. 
The script uses the `@notionhq/client` package to interact with the API.

## Notion Template

This script is intended to be used with Ultimate Task Template for Notion from Thomas Frank.
It will work also with Ultimate Brain Template.

With no or minimal changes, it can be used with any Notion database that has the following properties:
- Task
- Priority
- Kanban - State

In next version, I will add support for custom properties / templates.

## Prerequisites

Before you can use this script, you'll need to do the following:

- Create a Notion account (if you don't already have one).
- Create a new database in Notion and obtain the database ID. You can find the database ID in the URL when you're viewing the database.
- Create a new integration and obtain the integration key. You can create a new integration in the Notion integrations dashboard.

## Installation

To install the dependencies, run the following command:
```bash
npm install
```

## Usage

To run the script, set the following environment variables:

- `NOTION_API_KEY`: Your Notion integration key.
- `DATABASE_ID`: The ID of the Notion database where you want to add an item.

You can then run the script using the following command:

## Docker

Pull
```bash
docker pull docker.io/adrianludwig/notion-database-item-creator:latest
```

Build
```bash
docker build -t notion-database-item-creator .
```

Usage

```bash
docker run -d --env NOTION_API_KEY=<your-notion-api-key> --env DATABASE_ID=<your-database-id> -p 3000:<port> adrianludwig/notion-database-item-creator
```


### Manual testing
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Task"}' http://localhost:3000/items
```
