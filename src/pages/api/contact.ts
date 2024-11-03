import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (req.method === 'POST') {
		try {
			const { name, email, message, discord } = req.body;

			if (!name || !email || !message) {
				return res.status(400).json({ message: 'Missing fields' });
			}

			const embed = {
				title: 'New contact message',
				description: `Message from ${name} (${email}):\n${message}`,
				color: 3092790,
				fields: [
					{
						name: 'Name',
						value: `${name}`,
						inline: true,
					},
					{
						name: 'Discord',
						value: discord || 'Not provided',
						inline: true,
					},
					{
						name: 'Email',
						value: email,
						inline: true,
					},
					{
						name: 'Content',
						value: message,
					},
				],
				footer: {
					text: 'Message sent from the contact form',
				},
			};

			const webhookUrl = process.env.WEBHOOK_URL;

			if (!webhookUrl) {
				return res.status(500).json({ message: 'Webhook URL not set' });
			}

			const response = await fetch(webhookUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ embeds: [embed] }),
			});

			if (!response.ok) {
				return res.status(500).json({ message: 'Server error' });
			}

			return res.status(200).json({ message: 'Embed sent' });
		} catch (error) {
			console.error('Error sending embed:', error);
			return res.status(500).json({ message: 'Server error' });
		}
	} else {
		return res.status(405).json({ message: 'Method not allowed' });
	}
}
