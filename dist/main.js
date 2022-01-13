"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(8080);
    const server = app.getHttpServer();
    const router = server._events.request._router;
    const availableRoutes = router.stack
        .map(layer => {
        var _a, _b;
        if (layer.route) {
            return {
                route: {
                    path: (_a = layer.route) === null || _a === void 0 ? void 0 : _a.path,
                    method: (_b = layer.route) === null || _b === void 0 ? void 0 : _b.stack[0].method,
                },
            };
        }
    })
        .filter(item => item !== undefined);
    console.log(availableRoutes);
}
bootstrap();
//# sourceMappingURL=main.js.map