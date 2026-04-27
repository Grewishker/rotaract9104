import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  size?: "sm" | "default" | "lg" | "xl" | "xxl";
};

function Calendar({ 
  className, 
  classNames, 
  showOutsideDays = true, 
  size = "default",
  ...props 
}: CalendarProps) {
  // Size-based style mappings
  const sizeStyles = {
    sm: {
      container: "p-2",
      caption_label: "text-xs font-medium",
      nav_button: "h-6 w-6",
      head_cell: "w-7 text-[0.7rem]",
      cell: "h-7 w-7 text-xs",
      day: "h-7 w-7 text-xs",
      icon: "h-3 w-3",
    },
    default: {
      container: "p-3",
      caption_label: "text-sm font-medium",
      nav_button: "h-7 w-7",
      head_cell: "w-9 text-[0.8rem]",
      cell: "h-9 w-9 text-sm",
      day: "h-9 w-9 text-sm",
      icon: "h-4 w-4",
    },
    lg: {
      container: "p-4",
      caption_label: "text-base font-medium",
      nav_button: "h-9 w-9",
      head_cell: "w-11 text-[0.9rem]",
      cell: "h-11 w-11 text-base",
      day: "h-11 w-11 text-base",
      icon: "h-5 w-5",
    },
    xl: {
      container: "p-6",
      caption_label: "text-lg font-medium",
      nav_button: "h-10 w-10",
      head_cell: "w-13 text-[1rem]",
      cell: "h-13 w-13 text-lg",
      day: "h-13 w-13 text-lg",
      icon: "h-6 w-6",
    },
    xxl: {
      container: "p-8",
      caption_label: "text-2xl font-medium",
      nav_button: "h-12 w-12",
      head_cell: "w-15 text-[1.2rem]",
      cell: "h-15 w-15 text-2xl",
      day: "h-15 w-15 text-2xl",
      icon: "h-7 w-7",
    },
  };

  const styles = sizeStyles[size];

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(styles.container, className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: cn("space-y-4", size === "lg" && "space-y-5"),
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: styles.caption_label,
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          styles.nav_button,
          "bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: cn(
          "text-muted-foreground rounded-md font-normal",
          styles.head_cell
        ),
        row: cn("flex w-full", size === "lg" ? "mt-3" : "mt-2"),
        cell: cn(
          "text-center p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          styles.cell
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          styles.day,
          "p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className={styles.icon} />,
        IconRight: ({ ..._props }) => <ChevronRight className={styles.icon} />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };