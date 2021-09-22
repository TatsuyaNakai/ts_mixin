var tatsu = {
    version: undefined,
    name: 'tatsu'
};
var moe = {
    version: 1,
    firstName: "moe",
    lastName: "Kondo"
};
var haru = {
    version: 3,
    firstName: "haruo",
    middleName: "N",
    lastName: "akai"
};
function printDTO(dto) {
    if (dto.version == null) {
        console.log(dto.name);
    }
    else if (dto.version == 1) {
        console.log(dto.firstName, dto.lastName);
    }
    else if (dto.version == 2) {
        console.log(dto.firstName, dto.middleName, dto.lastName);
    }
    else {
        var _exhaustiveCheck = dto;
        // 最後の条件に絶対入らないものを入れておく。
    }
}
printDTO(haru);
//# sourceMappingURL=main.js.map