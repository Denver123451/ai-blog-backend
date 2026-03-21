import type { Context } from 'koa';

export default {
    async submit(ctx: Context) {
        const { name, email } = ctx.request.body as {
            name?: string;
            email?: string;
            message?: string;
        };

        if (!name?.trim() || !email?.trim()) {
            return ctx.badRequest('name and email are required');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return ctx.badRequest('Invalid email');
        }

        const lead = await strapi.entityService.create('api::contact-lead.contact-lead', {
            data: {
                name: name.trim(),
                email: email.trim().toLowerCase(),
            },
        });

        ctx.status = 201;
        ctx.body = {
            ok: true,
            data: lead,
        };
    },
};