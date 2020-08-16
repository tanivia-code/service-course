export async function analytics(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { analytics },
  } = ctx
  ctx.status = 200
  if (ctx.method.toUpperCase() === 'GET') {
    ctx.body = await analytics.getLiveUsers()
    ctx.set('cache-control', 'no-cache')
  }
  await next()
}
