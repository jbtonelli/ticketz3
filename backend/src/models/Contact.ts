import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  Default,
  HasMany,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import ContactCustomField from "./ContactCustomField";
import Ticket from "./Ticket";
import Company from "./Company";
import Schedule from "./Schedule";

@Table
class Contact extends Model<Contact> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @AllowNull(false)
  @Unique
  @Column
  number: string;

  @AllowNull(false)
  @Default("")
  @Column
  email: string;

  @Default("")
  @Column
  profilePicUrl: string;

  @Default("whatsapp")
  @Column
  channel: string;

  @Default(false)
  @Column
  isGroup: boolean;

  @Default(false)
  @Column
  disableBot: boolean

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ee19133 (CORREÇÃO DO MIGRATE E COLOCAR O CAMPO NO MODEL)
  @Default("available")
  @Column
  presence: string;

<<<<<<< HEAD
=======
>>>>>>> 92f284d (DESATIVAR O BOT DO CONTATO)
=======
>>>>>>> ee19133 (CORREÇÃO DO MIGRATE E COLOCAR O CAMPO NO MODEL)
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @HasMany(() => ContactCustomField)
  extraInfo: ContactCustomField[];

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @HasMany(() => Schedule, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    hooks: true
  })
  schedules: Schedule[];
}

export default Contact;
