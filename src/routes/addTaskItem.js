const notion = require('../lib/notion');

const DATABASE_ID = process.env.DATABASE_ID;

if (!DATABASE_ID) {
  throw new Error('The DATABASE_ID environment variable is missing.');
}

module.exports = async (req, res) => {
  const { name } = req.body;

  console.log('Creating task item:', name);

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      icon: {
        type: 'emoji',
        emoji: '💻',
      },
      properties: {
        Task: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        "Kanban - State": {
          type: "select",
          select: {
            name: "To Do"
          }
        },
        "Priority": {
          type: "select",
          select: {
            name: "🧀 Medium"
          }
        }
      },
    });

    res.status(201).json({ id: response.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
