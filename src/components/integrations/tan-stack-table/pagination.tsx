import { ActionIcon, Select, SelectOption, Text } from "rizzui";
import { type Table as ReactTableType } from "@tanstack/react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
];

export default function TablePagination<TData extends Record<string, any>>({
  table,
}: {
  table: ReactTableType<TData>;
}) {
  return (
    <div className="flex w-full items-center justify-between @container">
      <div className="hidden @2xl:block">
        <Text>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </Text>
      </div>
      <div className="flex w-full items-center justify-between gap-6 @2xl:w-auto @2xl:gap-12">
        <div className="flex items-center gap-4">
          <Text className="hidden font-medium text-gray-900 @md:block">Rows per page</Text>
          <Select
            options={options}
            className="w-[70px]"
            value={table.getState().pagination.pageSize}
            onChange={(v: SelectOption) => {
              table.setPageSize(Number(v.value));
            }}
            selectClassName="font-semibold text-sm ring-0 shadow-sm h-9"
            optionClassName="justify-center font-medium"
          />
        </div>
        <Text className="hidden font-medium text-gray-900 @3xl:block">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString()}
        </Text>
        <div className="grid grid-cols-4 gap-2">
          <ActionIcon
            rounded="lg"
            variant="outline"
            aria-label="Go to first page"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-gray-900 shadow-sm disabled:text-gray-400 disabled:shadow-none"
          >
            <ChevronDoubleLeftIcon className="size-5" />
          </ActionIcon>
          <ActionIcon
            rounded="lg"
            variant="outline"
            aria-label="Go to previous page"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-gray-900 shadow-sm disabled:text-gray-400 disabled:shadow-none"
          >
            <ChevronLeftIcon className="size-5" />
          </ActionIcon>
          <ActionIcon
            rounded="lg"
            variant="outline"
            aria-label="Go to next page"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-gray-900 shadow-sm disabled:text-gray-400 disabled:shadow-none"
          >
            <ChevronRightIcon className="size-5" />
          </ActionIcon>
          <ActionIcon
            rounded="lg"
            variant="outline"
            aria-label="Go to last page"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            className="text-gray-900 shadow-sm disabled:text-gray-400 disabled:shadow-none"
          >
            <ChevronDoubleRightIcon className="size-5" />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}
