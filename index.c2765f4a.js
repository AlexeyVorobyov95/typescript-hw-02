Object.defineProperty({},"__esModule",{value:!0});const e=new class{getSignature(){return this.signature}constructor(){this.signature=Math.random()}},t=new class extends class{comeIn(e){if(!this.door)throw new Error("Door is close");this.tenants.push(e),console.log("Person inside")}constructor(e){this.key=e,this.door=!1,this.tenants=[]}}{openDoor(e){if(e.getSignature()!==this.key.getSignature())throw new Error("Key to another door");return this.door=!0}}(e),o=new class{getKey(){return this.key}constructor(e){this.key=e}}(e);t.openDoor(o.getKey()),t.comeIn(o);
//# sourceMappingURL=index.c2765f4a.js.map
