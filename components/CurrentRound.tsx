"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

const rows = [
  {
    key: "0",
    name: "CPU1",
    point: "753",
    multiplier: "7.53",
  },
  {
    key: "1",
    name: "CPU2",
    point: "127",
    multiplier: "1.27",
  },
  {
    key: "2",
    name: "CPU3",
    point: "684",
    multiplier: "6.84",
  },
  {
    key: "3",
    name: "CPU4",
    point: "0",
    multiplier: "9.75",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "point",
    label: "Point",
  },
  {
    key: "multiplier",
    label: "Multiplier",
  },
];

export default function CurrentRound() {
  return (
    <Table selectionBehavior="replace" selectionMode="multiple">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
