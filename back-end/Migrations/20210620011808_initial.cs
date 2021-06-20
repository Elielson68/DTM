using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DTMBackend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "patient",
                columns: table => new
                {
                    PatientId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    DocNumber = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Age = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Phone = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Gender = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    PainChoice = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    InitialDistance = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patient", x => x.PatientId);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    UsersId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    RegisteredNumber = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Password = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.UsersId);
                });

            migrationBuilder.CreateTable(
                name: "exam",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Date = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    OpenMeasurementPx = table.Column<double>(type: "double precision", nullable: false),
                    ShutMeasurementPx = table.Column<double>(type: "double precision", nullable: false),
                    ResultMeasurementCm = table.Column<double>(type: "double precision", nullable: false),
                    ReportOpen = table.Column<byte[]>(type: "bytea", nullable: true),
                    ReportShut = table.Column<byte[]>(type: "bytea", nullable: true),
                    PatientId = table.Column<int>(type: "integer", nullable: false),
                    UsersId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exam", x => x.id);
                    table.ForeignKey(
                        name: "FK_exam_patient_PatientId",
                        column: x => x.PatientId,
                        principalTable: "patient",
                        principalColumn: "PatientId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_exam_users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "users",
                        principalColumn: "UsersId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_exam_PatientId",
                table: "exam",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_exam_UsersId",
                table: "exam",
                column: "UsersId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "exam");

            migrationBuilder.DropTable(
                name: "patient");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
