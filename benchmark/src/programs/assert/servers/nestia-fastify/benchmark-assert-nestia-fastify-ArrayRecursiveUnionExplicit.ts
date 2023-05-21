import { Controller } from "@nestjs/common";

import core from "@nestia/core";

import { Collection } from "../../../../structures/pure/Collection";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/pure/ArrayRecursiveUnionExplicit";
import { createNestFastifyAssertProgram } from "../createNestFastifyAssertProgram";

createNestFastifyAssertProgram(false)(37_022)(() => {
    @Controller()
    class NestiaController {
        @core.TypedRoute.Post("assert")
        public assert(@core.TypedBody() input: Collection<ArrayRecursiveUnionExplicit>): void {
            input;
        }
    }
    return NestiaController;
});