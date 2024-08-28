using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlockbusterMoviesFinal.Migrations
{
    /// <inheritdoc />
    public partial class AddUserIdToMovieClassAndReview : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Reviews",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "MovieClasses",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieClasses_UserId",
                table: "MovieClasses",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_MovieClasses_Users_UserId",
                table: "MovieClasses",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_UserId",
                table: "Reviews",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MovieClasses_Users_UserId",
                table: "MovieClasses");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_UserId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_MovieClasses_UserId",
                table: "MovieClasses");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "MovieClasses");
        }
    }
}
